INSERT INTO heylo_posts (title, img, content, author_id)
VALUES (${title}, ${img}, ${content}, ${author_id})
RETURNING *;