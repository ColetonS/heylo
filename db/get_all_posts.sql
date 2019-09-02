SELECT heylo_posts.*, username, profile_pic FROM heylo_posts
JOIN heylo_users ON heylo_posts.author_id = heylo_users.id;