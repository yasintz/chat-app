alter table "public"."customer" alter column "password_salt" drop not null;
alter table "public"."customer" add column "password_salt" text;
