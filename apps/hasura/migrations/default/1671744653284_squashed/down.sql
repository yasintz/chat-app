
alter table "public"."member" rename column "name" to "first_name";

alter table "public"."member" alter column "last_name" drop not null;
alter table "public"."member" add column "last_name" text;


alter table "public"."member" drop constraint "member_app_id_external_id_key";

alter table "public"."member" alter column "email" drop not null;
alter table "public"."member" add column "email" text;

CREATE  INDEX "member_email_app_id_key" on "public"."member" using btree ("app_id", "email");

alter table "public"."member" add constraint "member_email_app_id_key" unique ("email", "app_id");

alter table "public"."member" drop column "external_id";
