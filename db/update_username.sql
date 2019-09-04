UPDATE heylo_users 
SET username = ${username}
WHERE id = ${id}
RETURNING *;