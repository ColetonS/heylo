SELECT * FROM heylo_posts
JOIN heylo_users ON heylo_posts.author_id = heylo_users.id
WHERE heylo_users.id != $1 AND heylo_posts.title LIKE $2;