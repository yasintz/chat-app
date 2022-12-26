

alter table "public"."member" add column "avatar_file_id" uuid null;

alter table "public"."member"
  add constraint "member_avatar_file_id_fkey"
  foreign key ("avatar_file_id")
  references "public"."file"
  ("id") on update restrict on delete restrict;

INSERT INTO "public"."file_service"("value") VALUES (E'url');

CREATE TABLE "public"."file_type" ("value" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"));

INSERT INTO "public"."file_type"("value") VALUES (E'jpg'), (E'png'), (E'jpeg'), (E'mp4');

alter table "public"."file" add column "type" text not null;

alter table "public"."file"
  add constraint "file_type_fkey"
  foreign key ("type")
  references "public"."file_type"
  ("value") on update restrict on delete restrict;
