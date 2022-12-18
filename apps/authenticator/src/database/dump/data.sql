PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "simple_user" ("username" varchar PRIMARY KEY NOT NULL, "encryptedPassword" varchar NOT NULL, CONSTRAINT "UQ_a45681227a700b12aab46c1992f" UNIQUE ("username"));
INSERT INTO simple_user VALUES('207b8a60-e962-4ff6-a34d-3330029043ca','yasin','$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK');
COMMIT;
