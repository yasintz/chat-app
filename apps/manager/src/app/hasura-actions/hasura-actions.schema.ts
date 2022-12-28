import { ObjectType, Field } from '@nestjs/graphql';

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
export class LinkPreviewResponse {
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

@ObjectType()
export class GetAgoraRtcTokenResponse {
  @Field()
  token: string;
}
