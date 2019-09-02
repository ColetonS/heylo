SELECT title, img, content, username, profile_pic FROM heylo_posts
JOIN heylo_users ON heylo_posts.author_id = heylo_users.id
WHERE heylo_posts.id = $1;