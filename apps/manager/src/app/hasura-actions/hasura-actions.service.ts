import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import * as dns from 'dns';
import { environment } from '../../environments/environment';
import { hashString } from '../../utils/hash';
import hasura from '../../clients/graphql-request';
import { getMemberAndChannelQuery } from './hasura-actions.gql';

@Injectable()
export class HasuraActionsService {
  async getLinkPreview(url: string) {
    const urlInstance = new URL(url);
    urlInstance.searchParams.append('_escaped_fragment_', '');

    const response = await getLinkPreview(urlInstance.href, {
      followRedirects: 'manual',
      handleRedirects: (baseURL: string, forwardedURL: string) => {
        const urlObj = new URL(baseURL);
        const forwardedURLObj = new URL(forwardedURL);
        if (
          forwardedURLObj.hostname === urlObj.hostname ||
          forwardedURLObj.hostname === 'www.' + urlObj.hostname
        ) {
          return true;
        }
        return false;
      },
      resolveDNSHost: async (url: string) => {
        return new Promise((resolve, reject) => {
          const hostname = new URL(url).hostname;
          dns.lookup(hostname, (err, address) => {
            if (err) {
              reject(err);
            }
            resolve(address);
          });
        });
      },
    });
    return response;
  }

  async getAgoraRtcToken(memberId: string, channelId: string) {
    const { member } = await hasura.request(getMemberAndChannelQuery, {
      memberId,
      channelId,
    });

    if (!member) {
      throw Error("Member doesn't exists");
    }

    if (member.channels.length === 0) {
      throw Error("Member isn't part of the channel");
    }

    const appId = environment.agora.appId;
    const appCertificate = environment.agora.appCertificate;
    const uid = hashString(memberId);
    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const token = RtcTokenBuilder.buildTokenWithAccount(
      appId,
      appCertificate,
      channelId,
      memberId,
      role,
      privilegeExpiredTs
    );

    return { token };
  }
}
