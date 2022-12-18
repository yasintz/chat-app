alter table "public"."app" drop column "jwt_secrets";

alter table "public"."member" drop constraint "member_email_app_id_key";
alter table "public"."member" add constraint "member_email_key" unique ("email");
