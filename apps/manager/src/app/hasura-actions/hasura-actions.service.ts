import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';
import * as dns from 'dns';

@Injectable()
export class HasuraActionsService {
  async getLinkPreview(url: string) {
    // Standard for Ajax Crawling. Alternatively, we could add an user-agent header as a known bot
    // https://docs.netlify.com/site-deploys/post-processing/prerendering/
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
}
