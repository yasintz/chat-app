
alter table "public"."file" drop constraint "file_type_fkey";

alter table "public"."file" drop column "type";

DROP TABLE "public"."file_type";

DELETE FROM "public"."file_service" WHERE "value" = 'url';

alter table "public"."member" drop constraint "member_avatar_file_id_fkey";

alter table "public"."member" drop column "avatar_file_id";