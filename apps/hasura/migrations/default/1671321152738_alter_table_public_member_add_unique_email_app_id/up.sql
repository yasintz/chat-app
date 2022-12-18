alter table "public"."member" drop constraint "member_email_key";
alter table "public"."member" add constraint "member_email_app_id_key" unique ("email", "app_id");

alter table "public"."app" add column "jwt_secrets" jsonb null;
