CREATE TABLE "public"."customer" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "app_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("app_id") REFERENCES "public"."app"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
