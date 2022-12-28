import { UseGuards } from '@nestjs/common';
import { ObjectType, Field, Resolver, Query, Args } from '@nestjs/graphql';
import { HasuraActionsGuard } from './hasura-actions.guard';
import { HasuraActionsService } from './hasura-actions.service';

@ObjectType()
class LinkPreviewVideo {
  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => String, { nullable: true })
  secureUrl?: string | null;

  @Field(() => String, { nullable: true })
  type?: string | null;

  @Field(() => String, { nullable: true })
  width?: string;

  @Field(() => String, { nullable: true })
  height?: string;
}

@ObjectType()
class LinkPreviewResponse {
  @Field()
  url: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  siteName?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  mediaType: string;

  @Field({ nullable: true })
  contentType?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => [String])
  favicons: string[];

  @Field(() => [LinkPreviewVideo], { nullable: true })
  videos?: LinkPreviewVideo[];
}

@Resolver(LinkPreviewResponse)
export class HasuraActionsResolver {
  constructor(private hasuraActionService: HasuraActionsService) {}

  @Query(() => LinkPreviewResponse)
  @UseGuards(HasuraActionsGuard)
  async get_link_preview(
    @Args('url') url: string
  ): Promise<LinkPreviewResponse> {
    return this.hasuraActionService.getLinkPreview(url);
  }
}
