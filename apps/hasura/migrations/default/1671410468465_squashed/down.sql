
alter table "public"."message_reaction" drop constraint "message_reaction_member_id_fkey";

alter table "public"."message_reaction" drop constraint "message_reaction_pkey";
alter table "public"."message_reaction"
    add constraint "message_reaction_pkey"
    primary key ("message_id", "reaction_id");

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."message_reaction" add column "member_id" uuid
--  not null;
