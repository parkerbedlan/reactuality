/* @name JoinMailingList */
INSERT INTO "mailing_list" (email, user_id) VALUES (:email!, :userId);

/* @name SignUp */
INSERT INTO "user" (initial_ip_address) VALUES (:ipAddress!) RETURNING id;

/* @name LogSiteVisit */
INSERT INTO "site_visit" (ip_address, url, node_env, user_id) VALUES (:ipAddress!, :url!, :nodeEnv!, :userId);
