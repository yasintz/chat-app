
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

