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

INSERT INTO public.app (id, name) VALUES ('ae993ef6-7618-49c5-b032-2e072aa57973', 'Deneme App');


--
-- Data for Name: channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: chatuser
--

INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('93c5b5d8-6365-4f12-8747-39a68ae11159', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'Y', '2022-11-27 06:59:45.296098+00', '2022-11-27 06:59:45.296098+00', 'T', 'chat@app.com', '$2b$10$1NPoPCpjzMqr0Uv.E4/vEe5DjyeR.aWEDOm7vyKEDbpWShmJJBilK', 'owner');
INSERT INTO public.customer (id, app_id, first_name, created_at, updated_at, last_name, email, encrypted_password, role) VALUES ('666a580f-9495-48cb-ae61-cac75d9bcaec', 'ae993ef6-7618-49c5-b032-2e072aa57973', 'f', '2022-11-27 10:08:54.003934+00', '2022-11-27 10:08:54.003934+00', 'l', 'test-user@app.com', NULL, 'admin');


--
-- Data for Name: file; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: member_channel; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: member_file; Type: TABLE DATA; Schema: public; Owner: chatuser
--



--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: chatuser
--



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
