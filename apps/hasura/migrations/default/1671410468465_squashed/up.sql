
alter table "public"."message_reaction" add column "member_id" uuid
 not null;

BEGIN TRANSACTION;
ALTER TABLE "public"."message_reaction" DROP CONSTRAINT "message_reaction_pkey";

ALTER TABLE "public"."message_reaction"
    ADD CONSTRAINT "message_reaction_pkey" PRIMARY KEY ("message_id", "reaction_id", "member_id");
COMMIT TRANSACTION;

alter table "public"."message_reaction"
  add constraint "message_reaction_member_id_fkey"
  foreign key ("member_id")
  references "public"."member"
  ("id") on update restrict on delete restrict;
