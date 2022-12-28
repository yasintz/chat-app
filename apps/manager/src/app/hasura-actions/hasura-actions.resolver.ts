import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { HasuraActionsGuard } from './hasura-actions.guard';
import {
  GetAgoraRtcTokenResponse,
  LinkPreviewResponse,
} from './hasura-actions.schema';
import { HasuraActionsService } from './hasura-actions.service';
import { HasuraUser, UUIDScalar } from '../../helpers/graphql';

@Resolver('hasura-actions')
@UseGuards(HasuraActionsGuard)
export class HasuraActionsResolver {
  constructor(private hasuraActionService: HasuraActionsService) {}

  @Query(() => LinkPreviewResponse)
  async get_link_preview(
    @Args('url') url: string
  ): Promise<LinkPreviewResponse> {
    return this.hasuraActionService.getLinkPreview(url);
  }

  @Mutation(() => GetAgoraRtcTokenResponse)
  async get_agora_rtc_token(
    @Args('channelId', { type: () => UUIDScalar }) channelId: string,
    @HasuraUser() member: HasuraUser
  ): Promise<GetAgoraRtcTokenResponse> {
    return this.hasuraActionService.getAgoraRtcToken(member.id, channelId);
  }
}
