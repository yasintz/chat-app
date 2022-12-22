

alter table "public"."member" add column "external_id" text not null;

alter table "public"."member" drop constraint "member_email_app_id_key";

DROP INDEX IF EXISTS "public"."member_email_app_id_key";

alter table "public"."member" drop column "email" cascade;

alter table "public"."member" add constraint "member_app_id_external_id_key" unique ("app_id", "external_id");

alter table "public"."member" drop column "last_name" cascade;

alter table "public"."member" rename column "first_name" to "name";
