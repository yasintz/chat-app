--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 11.2 (Debian 11.2-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: app; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.app (id, name, jwt_secrets) VALUES ('ae993ef6-7618-49c5-b032-2e072aa57973', 'Deneme App 3', '[{"key": "-----BEGIN PUBLIC KEY---MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQClDyElcTC9VnPjJgn4IRHAVGoTFi1Un/uYWQcKs76G7EinDUbgiaCkVcHc1J9jfiZK+mzV/4YAJkMCaOzAbX2ZxB7bMyA2NJECGGcZnjxR9FQv46TvnNnNpz13bQIyMzIXBIFky51Juitxb/e7KC7+nd6Fml0IiXX4dipLG1jMbQIDAQAB-----END PUBLIC KEY-----", "issuer": "simple-user", "algorithm": "RS256"}]');


--
-- Data for Name: channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('d9526cd5-b04f-4003-9ac8-fea05175f62d', 'TEST 1', '2022-11-28 22:07:10.920877+00', '2022-11-29 16:42:36.902007+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('f904b9a2-e2ec-4627-8f26-69e7b92b89c5', 'test2', '2022-11-29 16:57:27.090624+00', '2022-11-29 16:57:27.090624+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('feaaec2b-f499-4578-bba9-a01dc2596386', 'test 3', '2022-11-29 16:58:44.217017+00', '2022-11-29 16:58:44.217017+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('b352755e-fb73-4c45-9c85-60981c7645f2', 'test4', '2022-11-29 17:09:38.556885+00', '2022-11-29 17:09:38.556885+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('69fd6ce6-9ee7-4293-af28-7b467356773b', 'test5', '2022-11-29 17:19:50.62221+00', '2022-11-29 17:19:50.62221+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('6f09763e-285c-4ba8-98a6-c711207acd07', 'test', '2022-11-29 17:22:02.3267+00', '2022-11-29 17:22:02.3267+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('5759bd6d-48d4-4307-bdb2-161d3c0cf1ca', 'asd', '2022-11-29 17:27:56.685121+00', '2022-11-29 17:27:56.685121+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('2b3d4637-0749-4ebc-8469-2fc2798528e2', 'asdaqwe', '2022-11-29 17:28:21.460408+00', '2022-11-29 17:28:21.460408+00', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('93c5b5d8-6365-4f12-8747-39a68ae11159', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Yy', '2022-11-27 06:59:45.296098+00', '2022-11-27 16:54:03.307772+00', 'T', 'chat@app.com', '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'owner');
INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('666a580f-9495-48cb-ae61-cac75d9bcaec', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'f', '2022-11-27 10:08:54.003934+00', '2022-11-28 23:39:15.685288+00', 'l', 'test-user@app.com', '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'admin');


--
-- Data for Name: file; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('3943b4f9-3ef3-43b5-9048-3e83fe6995f5', '2022-12-26 13:08:58.775808+00', '2022-12-26 13:08:58.775808+00', 'https://i.pravatar.cc/150?u=a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Member App Avatar', 'url', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('987a243b-2a39-4c0a-be6c-546285d19d13', '2022-12-26 13:10:13.171603+00', '2022-12-26 13:10:13.171603+00', 'https://i.pravatar.cc/150?u=2', 'Avatar 2', 'url', NULL, 'jpg');


--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, "encryptedPassword", external_id, avatar_file_id) VALUES ('48af78d8-246f-482b-826c-a5c61194e612', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'qwe', '2022-11-28 23:46:58.86627+00', '2022-11-28 23:46:58.86627+00', NULL, NULL, 'member@app.com', NULL);
INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, "encryptedPassword", external_id, avatar_file_id) VALUES ('a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'asd', '2022-11-28 23:46:48.201652+00', '2022-12-26 13:09:07.47727+00', NULL, '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'member1@app.com', '3943b4f9-3ef3-43b5-9048-3e83fe6995f5');
INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, "encryptedPassword", external_id, avatar_file_id) VALUES ('d49fa8e5-4708-4f53-9648-4b57ae36e34e', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'yasin', '2022-12-23 23:09:25.239207+00', '2022-12-26 13:10:30.357171+00', NULL, NULL, '207b8a60-e962-4ff6-a34d-3330029043ca', '987a243b-2a39-4c0a-be6c-546285d19d13');


--
-- Data for Name: member_channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.member_channel (id, member_id, channel_id) VALUES ('4d741b15-346c-4a3c-aacc-74ed24889aff', 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'd9526cd5-b04f-4003-9ac8-fea05175f62d');
INSERT INTO public.member_channel (id, member_id, channel_id) VALUES ('1a40e8f9-123d-4e16-a1d3-04ccd4c7964f', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'd9526cd5-b04f-4003-9ac8-fea05175f62d');
INSERT INTO public.member_channel (id, member_id, channel_id) VALUES ('9b3cf0ba-b041-4f06-8766-a8392bd1c037', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'f904b9a2-e2ec-4627-8f26-69e7b92b89c5');
INSERT INTO public.member_channel (id, member_id, channel_id) VALUES ('82787853-0c08-4580-bd12-32e8d63cf0ed', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'feaaec2b-f499-4578-bba9-a01dc2596386');
INSERT INTO public.member_channel (id, member_id, channel_id) VALUES ('810a40a1-db73-478a-81a6-b41942630c30', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'b352755e-fb73-4c45-9c85-60981c7645f2');


--
-- Data for Name: member_file; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('2e6dfe63-79a3-4704-85cf-c69041df6fa4', '2022-12-03 00:57:29.526339+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test Mesaj', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('3890f7ff-903d-4037-87c1-488c218990ec', '2022-12-03 01:01:25.54782+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test Mesaj 2', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a6d6cfd3-7018-4f6b-b8cc-00dec907979e', '2022-12-03 21:35:22.830799+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test WS Mesaj', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('c22f0d9b-ae31-4ad3-a954-aa8d3017fd82', '2022-12-03 22:15:23.946804+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a4f3cfdc-84aa-4d48-898a-3de428274b8b', '2022-12-03 22:18:20.408925+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('1b27e100-a326-4d4d-8873-85eda4af2ea6', '2022-12-03 22:24:34.373461+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asd', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a3d7cc00-fec9-4c3e-9238-740fdcbbbf31', '2022-12-03 22:25:30.65017+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'werwe', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('cb5e14aa-64e7-45ec-ac25-39d4409541aa', '2022-12-03 22:27:19.516204+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'ret', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('7a41703c-388f-4f19-abc1-eb433af9e036', '2022-12-03 22:27:35.23563+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'bu bitti', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('888939fc-7f56-4c47-98f4-0a4ee83b0932', '2022-12-24 00:04:02.430696+00', NULL, NULL, 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'testing..', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('87aedf84-eef0-4e3b-8571-7fcc1ad57351', '2022-12-26 11:38:13.381477+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', '🍔', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('e21814d0-fd1e-4257-93ec-32717fb17b04', '2022-12-26 11:42:53.67044+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asfasdf😜', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('36e97196-ccf3-4746-8746-b47f553cdd1d', '2022-12-26 12:17:26.467097+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test message', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('e145387c-e622-4eb0-bb9a-2f6596155710', '2022-12-26 12:18:54.613709+00', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asdf
**Bold Message**', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);


--
-- Data for Name: message_file; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: reaction; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: message_reaction; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- PostgreSQL database dump complete
--
