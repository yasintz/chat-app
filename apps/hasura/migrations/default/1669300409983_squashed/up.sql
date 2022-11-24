

alter table "public"."customer" add column "first_name" text
 not null;

alter table "public"."customer" add column "created_at" timestamptz
 not null default now();

alter table "public"."customer" add column "updated_at" timestamptz
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
CREATE TRIGGER "set_public_customer_updated_at"
BEFORE UPDATE ON "public"."customer"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_customer_updated_at" ON "public"."customer" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."customer" add column "last_name" text
 not null;

alter table "public"."customer" add column "email" text
 not null unique;

alter table "public"."customer" add column "encrypted_password" text
 not null;

alter table "public"."customer" add column "password_salt" text
 not null;

CREATE TABLE "public"."customer_role" ("value" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO public.customer_role (value) VALUES ('owner'), ('admin');

alter table "public"."customer" add column "role" text
 not null;

alter table "public"."customer"
  add constraint "customer_role_id_fkey"
  foreign key ("role")
  references "public"."customer_role"
  ("value") on update restrict on delete restrict;


CREATE TABLE "public"."channel" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "app_id" uuid NOT NULL, "deleted_at" timestamptz NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("app_id") REFERENCES "public"."app"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
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
CREATE TRIGGER "set_public_channel_updated_at"
BEFORE UPDATE ON "public"."channel"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_channel_updated_at" ON "public"."channel" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."file" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "path" text NOT NULL, "name" text NOT NULL, "service" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
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
CREATE TRIGGER "set_public_file_updated_at"
BEFORE UPDATE ON "public"."file"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_file_updated_at" ON "public"."file" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."file_service" ("value" text NOT NULL, PRIMARY KEY ("value") );

INSERT INTO public.file_service (value) VALUES ('cloudinary');

alter table "public"."file"
  add constraint "file_service_fkey"
  foreign key ("service")
  references "public"."file_service"
  ("value") on update restrict on delete restrict;

CREATE TABLE "public"."member" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "app_id" uuid NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("app_id") REFERENCES "public"."app"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."member_file" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "member_id" uuid NOT NULL, "file_id" uuid NOT NULL, PRIMARY KEY ("member_id","file_id") , FOREIGN KEY ("file_id") REFERENCES "public"."file"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."member_channel" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "member_id" uuid NOT NULL, "channel_id" uuid NOT NULL, PRIMARY KEY ("member_id","channel_id") , FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("channel_id") REFERENCES "public"."channel"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
