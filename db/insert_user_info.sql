INSERT INTO heylo_users (username, password)
VALUES (${username}, ${password})
RETURNING *;