alter table "public"."member" add column "active_at" timestamp null;

ALTER TABLE "public"."member" ALTER COLUMN "deleted_at" TYPE timestamp;

ALTER TABLE "public"."member" ALTER COLUMN "updated_at" TYPE timestamp;

ALTER TABLE "public"."member" ALTER COLUMN "created_at" TYPE timestamp;

ALTER TABLE "public"."channel" ALTER COLUMN "created_at" TYPE timestamp;

ALTER TABLE "public"."channel" ALTER COLUMN "updated_at" TYPE timestamp;

ALTER TABLE "public"."channel" ALTER COLUMN "deleted_at" TYPE timestamp;

ALTER TABLE "public"."customer" ALTER COLUMN "created_at" TYPE timestamp;

ALTER TABLE "public"."customer" ALTER COLUMN "updated_at" TYPE timestamp;

ALTER TABLE "public"."file" ALTER COLUMN "created_at" TYPE timestamp;

ALTER TABLE "public"."file" ALTER COLUMN "updated_at" TYPE timestamp;

ALTER TABLE "public"."file" ALTER COLUMN "deleted_at" TYPE timestamp;

ALTER TABLE "public"."message" ALTER COLUMN "created_at" TYPE timestamp;

ALTER TABLE "public"."message" ALTER COLUMN "updated_at" TYPE timestamp;

ALTER TABLE "public"."message" ALTER COLUMN "deleted_at" TYPE timestamp;

alter table "public"."member_channel" add column "last_seen_at" timestamp null;
