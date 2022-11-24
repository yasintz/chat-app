CREATE TABLE "public"."member" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "app_id" uuid NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("app_id") REFERENCES "public"."app"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
