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

INSERT INTO public.app (id, name, jwt_secrets) VALUES ('ae993ef6-7618-49c5-b032-2e072aa57973', 'Chat App Developers', '[{"key": "-----BEGIN PUBLIC KEY---MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQClDyElcTC9VnPjJgn4IRHAVGoTFi1Un/uYWQcKs76G7EinDUbgiaCkVcHc1J9jfiZK+mzV/4YAJkMCaOzAbX2ZxB7bMyA2NJECGGcZnjxR9FQv46TvnNnNpz13bQIyMzIXBIFky51Juitxb/e7KC7+nd6Fml0IiXX4dipLG1jMbQIDAQAB-----END PUBLIC KEY-----", "issuer": "simple-user", "algorithm": "RS256"}]');


--
-- Data for Name: channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('d9526cd5-b04f-4003-9ac8-fea05175f62d', 'Default', '2022-11-28 22:07:10.920877', '2022-11-29 16:42:36.902007', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('f904b9a2-e2ec-4627-8f26-69e7b92b89c5', 'VIP', '2022-11-29 16:57:27.090624', '2022-11-29 16:57:27.090624', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('feaaec2b-f499-4578-bba9-a01dc2596386', 'Testers', '2022-11-29 16:58:44.217017', '2022-11-29 16:58:44.217017', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('b352755e-fb73-4c45-9c85-60981c7645f2', 'Designers', '2022-11-29 17:09:38.556885', '2022-11-29 17:09:38.556885', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('69fd6ce6-9ee7-4293-af28-7b467356773b', 'PM', '2022-11-29 17:19:50.62221', '2022-11-29 17:19:50.62221', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);
INSERT INTO public.channel (id, name, created_at, updated_at, app_id, deleted_at) VALUES ('6f09763e-285c-4ba8-98a6-c711207acd07', 'CSM', '2022-11-29 17:22:02.3267', '2022-11-29 17:22:02.3267', 'ae993ef6-7618-49c5-b032-2e072aa57973', NULL);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('93c5b5d8-6365-4f12-8747-39a68ae11159', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Yasin', '2022-11-27 06:59:45.296098', '2022-11-27 16:54:03.307772', 'Tazeoglu', 'yasin@chat.app', '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'owner');
INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('666a580f-9495-48cb-ae61-cac75d9bcaec', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Yusuf', '2022-11-27 10:08:54.003934', '2022-11-28 23:39:15.685288', 'Celik', 'yusuf@chat.app', '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'admin');


--
-- Data for Name: file; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('3943b4f9-3ef3-43b5-9048-3e83fe6995f5', '2022-12-26 13:08:58.775808', '2022-12-26 13:08:58.775808', 'https://avatars.githubusercontent.com/u/36041339', 'Member App Avatar', 'url', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('987a243b-2a39-4c0a-be6c-546285d19d13', '2022-12-26 13:10:13.171603', '2022-12-26 13:10:13.171603', 'https://user-images.githubusercontent.com/36041339/209736425-bc14db0b-c1a1-4113-8dbe-fe157e6479b8.jpeg', 'Avatar 2', 'url', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('5044b369-97bf-4302-aadd-8ec927eea7bc', '2022-12-26 13:10:13.171603', '2022-12-26 13:10:13.171603', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80', 'Avatar 2', 'url', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('1059e19c-95ad-4472-aee4-cea0f1b9c28f', '2022-12-27 22:24:52.556965', '2022-12-27 22:24:52.556965', 'chat-uploads/amezqt0c8i3fcl8wlepi', 'chat.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('56596a4c-18fb-4dc5-9de2-7eaee82160c1', '2022-12-27 22:27:43.452866', '2022-12-27 22:27:43.452866', 'chat-uploads/yclkisdrkhnbajoctlcd', 'chat.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('cdb2c394-c414-4637-9f3b-df411be11eff', '2022-12-27 22:36:28.453423', '2022-12-27 22:36:28.453423', 'chat-uploads/lymkzhsxe9fqfjqv3syu', '36041339.jpeg', 'cloudinary', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('38264748-3bf6-4fa7-a51d-547137593f2e', '2022-12-27 22:38:24.502831', '2022-12-27 22:38:24.502831', 'chat-uploads/x6raoxmwxpxwkzwbk7rw', 'Screen Recording 2022-12-28 at 00.46.12.mp4', 'cloudinary', NULL, 'mp4');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('b1de3981-9067-46a3-b123-ebc54520177b', '2022-12-27 22:38:47.688668', '2022-12-27 22:38:47.688668', 'chat-uploads/xz0j6io0awytd4kmf57z', '36041339.jpeg', 'cloudinary', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('f27fef65-acb7-4915-92d1-90d56a6c5864', '2022-12-27 22:38:48.371478', '2022-12-27 22:38:48.371478', 'chat-uploads/szauyltqoykg35vlbc6y', 'chat.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('d0e716b9-e398-46bc-9779-4aee45f25b8b', '2022-12-27 22:39:54.07232', '2022-12-27 22:39:54.07232', 'chat-uploads/loc8o6sa5omdpqzobwou', 'chat.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('e1df7641-8b74-406f-8c97-ad60d21d0e5b', '2022-12-27 22:45:12.398968', '2022-12-27 22:45:12.398968', 'chat-uploads/ebflsymts4nf3ytnpjaj', 'Screen Shot 2022-12-25 at 22.49.21.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('36fda015-c109-490e-98f5-d857602c6864', '2022-12-27 23:01:37.150042', '2022-12-27 23:01:37.150042', 'chat-uploads/uukqaiaijaxfddoyxdhp', 'Screen Recording 2022-12-28 at 00.46.12.mp4', 'cloudinary', NULL, 'mp4');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('967a3519-c873-4c24-a826-ba2aa512ef66', '2022-12-27 23:11:09.533458', '2022-12-27 23:11:09.533458', 'chat-uploads/oaagvfttby9wsn1igtgz', '36041339.jpeg', 'cloudinary', NULL, 'jpg');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('6178fc37-a135-4751-a648-c43d3c3725c4', '2022-12-27 23:11:14.293006', '2022-12-27 23:11:14.293006', 'chat-uploads/ywulmblcv72m935cxria', 'Screen Recording 2022-12-28 at 00.46.12.mp4', 'cloudinary', NULL, 'mp4');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('ba042464-1618-45b3-95e0-c63bcf0fd43d', '2022-12-27 23:13:20.767194', '2022-12-27 23:13:20.767194', 'chat-uploads/go7qa8xsxqxiimn5x3xo', 'Screen Shot 2022-12-25 at 22.49.21.png', 'cloudinary', NULL, 'png');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('9c181b01-3a49-4b7e-bf20-5351ff0b31c4', '2022-12-27 23:13:34.27231', '2022-12-27 23:13:34.27231', 'chat-uploads/zc8mxuibnghocqporkxs', 'Screen Recording 2022-12-28 at 00.46.12.mp4', 'cloudinary', NULL, 'mp4');
INSERT INTO public.file (id, created_at, updated_at, path, name, service, deleted_at, type) VALUES ('e2a3e8f8-291a-4b21-81f4-2ff2f77f6dc7', '2022-12-27 23:42:11.68597', '2022-12-27 23:42:11.68597', 'chat-uploads/txutt02ytfmkkb4tpgnk', 'Screen Recording 2022-12-28 at 00.46.12.mp4', 'cloudinary', NULL, 'mp4');


--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, encrypted_password, external_id, avatar_file_id, active_at) VALUES ('a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Yasin T.', '2022-11-28 23:46:48.201652', '2022-12-26 13:09:07.47727', NULL, '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'yasin@chat.app', '3943b4f9-3ef3-43b5-9048-3e83fe6995f5', NULL);
INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, encrypted_password, external_id, avatar_file_id, active_at) VALUES ('48af78d8-246f-482b-826c-a5c61194e612', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Yusuf C.', '2022-11-28 23:46:48.201652', '2022-12-26 13:09:07.47727', NULL, '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'yusuf@chat.app', '987a243b-2a39-4c0a-be6c-546285d19d13', NULL);
INSERT INTO public.member (id, app_id, name, created_at, updated_at, deleted_at, encrypted_password, external_id, avatar_file_id, active_at) VALUES ('d49fa8e5-4708-4f53-9648-4b57ae36e34e', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Jane D.', '2022-12-23 23:09:25.239207', '2022-12-26 13:10:30.357171', NULL, NULL, '207b8a60-e962-4ff6-a34d-3330029043ca', '5044b369-97bf-4302-aadd-8ec927eea7bc', NULL);


--
-- Data for Name: member_channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('4d741b15-346c-4a3c-aacc-74ed24889aff', 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('1a40e8f9-123d-4e16-a1d3-04ccd4c7964f', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('9b3cf0ba-b041-4f06-8766-a8392bd1c037', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'f904b9a2-e2ec-4627-8f26-69e7b92b89c5', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('82787853-0c08-4580-bd12-32e8d63cf0ed', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'feaaec2b-f499-4578-bba9-a01dc2596386', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('810a40a1-db73-478a-81a6-b41942630c30', 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'b352755e-fb73-4c45-9c85-60981c7645f2', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('8c5bb0da-ddad-43e5-a78f-434a891da59e', 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'f904b9a2-e2ec-4627-8f26-69e7b92b89c5', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('c4894df8-2144-4438-8685-6afee5999435', 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', '69fd6ce6-9ee7-4293-af28-7b467356773b', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('41cb610f-b383-4307-98cf-3726a793084c', '48af78d8-246f-482b-826c-a5c61194e612', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL);
INSERT INTO public.member_channel (id, member_id, channel_id, last_seen_at) VALUES ('21fee9d6-9798-4a3f-9f28-7991edcccb9a', '48af78d8-246f-482b-826c-a5c61194e612', '6f09763e-285c-4ba8-98a6-c711207acd07', NULL);


--
-- Data for Name: member_file; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('2e6dfe63-79a3-4704-85cf-c69041df6fa4', '2022-12-03 00:57:29.526339', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test Mesaj', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('3890f7ff-903d-4037-87c1-488c218990ec', '2022-12-03 01:01:25.54782', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test Mesaj 2', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a6d6cfd3-7018-4f6b-b8cc-00dec907979e', '2022-12-03 21:35:22.830799', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test WS Mesaj', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('c22f0d9b-ae31-4ad3-a954-aa8d3017fd82', '2022-12-03 22:15:23.946804', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a4f3cfdc-84aa-4d48-898a-3de428274b8b', '2022-12-03 22:18:20.408925', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('1b27e100-a326-4d4d-8873-85eda4af2ea6', '2022-12-03 22:24:34.373461', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asd', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a3d7cc00-fec9-4c3e-9238-740fdcbbbf31', '2022-12-03 22:25:30.65017', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'werwe', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('cb5e14aa-64e7-45ec-ac25-39d4409541aa', '2022-12-03 22:27:19.516204', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'ret', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('7a41703c-388f-4f19-abc1-eb433af9e036', '2022-12-03 22:27:35.23563', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'bu bitti', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('888939fc-7f56-4c47-98f4-0a4ee83b0932', '2022-12-24 00:04:02.430696', NULL, NULL, 'd49fa8e5-4708-4f53-9648-4b57ae36e34e', 'testing..', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('87aedf84-eef0-4e3b-8571-7fcc1ad57351', '2022-12-26 11:38:13.381477', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', '🍔', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('e21814d0-fd1e-4257-93ec-32717fb17b04', '2022-12-26 11:42:53.67044', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asfasdf😜', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('36e97196-ccf3-4746-8746-b47f553cdd1d', '2022-12-26 12:17:26.467097', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test message', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('e145387c-e622-4eb0-bb9a-2f6596155710', '2022-12-26 12:18:54.613709', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'asdf
**Bold Message**', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('7bd01885-2271-4881-be9c-fb1587905c49', '2022-12-27 22:36:36.504461', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'Test Message', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('0bfcaff6-2cda-49d0-ab81-47aeaab511b1', '2022-12-27 22:36:55.690886', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', '', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('1013b417-10e1-4b47-9eed-c6c30bb1d8cd', '2022-12-27 22:38:57.355943', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'custom message', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('42a0593b-4ac4-4e79-9e38-1765543ab804', '2022-12-27 23:13:38.789556', NULL, NULL, 'a7f4c2d8-11db-4564-a194-e5f550e0ac51', 'test message', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('17f54155-eaa0-4976-b2c3-c6c899fcd104', '2022-12-27 23:41:41.714058', NULL, NULL, '48af78d8-246f-482b-826c-a5c61194e612', 'thats cool', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);
INSERT INTO public.message (id, created_at, updated_at, deleted_at, sender_id, body, channel_id, parent_id, reply_to_id) VALUES ('a66eff27-3cef-453f-9330-eca5380c3ec7', '2022-12-27 23:42:13.670135', NULL, NULL, '48af78d8-246f-482b-826c-a5c61194e612', '**Bold Message**

### Title', 'd9526cd5-b04f-4003-9ac8-fea05175f62d', NULL, NULL);


--
-- Data for Name: message_file; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.message_file (id, message_id, file_id) VALUES ('a811aa8e-c582-4837-a304-dfd08d98bd25', '7bd01885-2271-4881-be9c-fb1587905c49', 'cdb2c394-c414-4637-9f3b-df411be11eff');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('8a962b45-6aa6-4ed6-b3fd-cffdcc63e6cb', '0bfcaff6-2cda-49d0-ab81-47aeaab511b1', 'cdb2c394-c414-4637-9f3b-df411be11eff');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('1d173c53-2978-4f8a-8294-1ffe426a7781', '1013b417-10e1-4b47-9eed-c6c30bb1d8cd', '38264748-3bf6-4fa7-a51d-547137593f2e');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('2506ad76-ad10-4efe-8930-177d6d8a4acb', '1013b417-10e1-4b47-9eed-c6c30bb1d8cd', 'b1de3981-9067-46a3-b123-ebc54520177b');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('904225d0-36b9-45a1-941f-080a54b0d076', '1013b417-10e1-4b47-9eed-c6c30bb1d8cd', 'f27fef65-acb7-4915-92d1-90d56a6c5864');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('7a0e4767-0ccd-4e45-aa93-3093c3296ff2', '42a0593b-4ac4-4e79-9e38-1765543ab804', 'ba042464-1618-45b3-95e0-c63bcf0fd43d');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('a64e7ee0-a944-45f1-b571-e813417190b4', '42a0593b-4ac4-4e79-9e38-1765543ab804', '9c181b01-3a49-4b7e-bf20-5351ff0b31c4');
INSERT INTO public.message_file (id, message_id, file_id) VALUES ('73779a92-fd9d-4918-b9d3-c7e44b18f324', 'a66eff27-3cef-453f-9330-eca5380c3ec7', 'e2a3e8f8-291a-4b21-81f4-2ff2f77f6dc7');


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
