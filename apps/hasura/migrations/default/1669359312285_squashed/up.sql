
CREATE TABLE "public"."message" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz, "deleted_at" timestamptz, "sender_id" uuid NOT NULL, "body" text NOT NULL, "channel_id" uuid NOT NULL, "parent_id" uuid, "reply_to_id" uuid, PRIMARY KEY ("id") , FOREIGN KEY ("channel_id") REFERENCES "public"."channel"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("sender_id") REFERENCES "public"."member"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_message_updated_at"
BEFORE UPDATE ON "public"."message"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_message_updated_at" ON "public"."message" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."message"
  add constraint "message_parent_id_fkey"
  foreign key ("parent_id")
  references "public"."message"
  ("id") on update restrict on delete restrict;

alter table "public"."message"
  add constraint "message_reply_to_id_fkey"
  foreign key ("reply_to_id")
  references "public"."message"
  ("id") on update restrict on delete restrict;

CREATE TABLE "public"."message_file" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "message_id" uuid NOT NULL, "file_id" uuid NOT NULL, PRIMARY KEY ("message_id","file_id") , FOREIGN KEY ("file_id") REFERENCES "public"."file"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("message_id") REFERENCES "public"."message"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."reaction" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."message_reaction" ("id" uuid NOT NULL, "message_id" uuid NOT NULL, "reaction_id" uuid NOT NULL, PRIMARY KEY ("message_id","reaction_id") , FOREIGN KEY ("message_id") REFERENCES "public"."message"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("reaction_id") REFERENCES "public"."reaction"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));

alter table "public"."message_reaction" alter column "id" set default gen_random_uuid();

alter table "public"."file" add column "deleted_at" timestamptz
 null;

alter table "public"."member" add column "created_at" timestamptz
 not null default now();

alter table "public"."member" add column "updated_at" timestamptz
 not null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_member_updated_at"
BEFORE UPDATE ON "public"."member"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_member_updated_at" ON "public"."member" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."member" add column "deleted_at" timestamptz
 null;

alter table "public"."channel" alter column "deleted_at" drop not null;
