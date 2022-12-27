alter table "public"."member_channel" drop column "last_seen_at";

ALTER TABLE "public"."message" ALTER COLUMN "deleted_at" TYPE timestamp with time zone;

ALTER TABLE "public"."message" ALTER COLUMN "updated_at" TYPE timestamp with time zone;

ALTER TABLE "public"."message" ALTER COLUMN "created_at" TYPE timestamp with time zone;

ALTER TABLE "public"."file" ALTER COLUMN "deleted_at" TYPE timestamp with time zone;

ALTER TABLE "public"."file" ALTER COLUMN "updated_at" TYPE timestamp with time zone;

ALTER TABLE "public"."file" ALTER COLUMN "created_at" TYPE timestamp with time zone;

ALTER TABLE "public"."customer" ALTER COLUMN "updated_at" TYPE timestamp with time zone;

ALTER TABLE "public"."customer" ALTER COLUMN "created_at" TYPE timestamp with time zone;

ALTER TABLE "public"."channel" ALTER COLUMN "deleted_at" TYPE timestamp with time zone;

ALTER TABLE "public"."channel" ALTER COLUMN "updated_at" TYPE timestamp with time zone;

ALTER TABLE "public"."channel" ALTER COLUMN "created_at" TYPE timestamp with time zone;

ALTER TABLE "public"."member" ALTER COLUMN "created_at" TYPE timestamp with time zone;

ALTER TABLE "public"."member" ALTER COLUMN "updated_at" TYPE timestamp with time zone;

ALTER TABLE "public"."member" ALTER COLUMN "deleted_at" TYPE timestamp with time zone;

alter table "public"."member" drop column "active_at";
