alter table "public"."file"
  add constraint "file_service_fkey"
  foreign key ("service")
  references "public"."file_service"
  ("value") on update restrict on delete restrict;
