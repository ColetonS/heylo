CREATE TABLE heylo_users (
id SERIAL PRIMARY KEY, 
username VARCHAR,
password VARCHAR,
profile_pic TEXT
);

CREATE TABLE heylo_posts (
id SERIAL PRIMARY KEY,
title VARCHAR,
img TEXT,
content TEXT,
author_id INTEGER REFERENCES heylo_users(id)
);


INSERT INTO heylo_users (username, password, profile_pic)
VALUES ('user1', 'pass1', 'https://robohash.org/user1'),
       ('user2', 'pass2', 'https://robohash.org/user2'),
       ('user3', 'pass3', 'https://robohash.org/user3');

INSERT INTO heylo_posts (title, img, content, author_id)
VALUES ('title1', 'https://robohash.org/img1', 'Lorem ipsum muthurussia', '1'),
       ('title2', 'https://robohash.org/img2', 'I want to go home', '2'),
       ('title3', 'https://robohash.org/img3', 'Hi, everyone!', '3');