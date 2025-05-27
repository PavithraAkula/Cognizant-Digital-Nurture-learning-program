SELECT u.full_name, 
  SUM(e.status = 'upcoming') AS upcoming,
  SUM(e.status = 'completed') AS completed,
  SUM(e.status = 'cancelled') AS cancelled
FROM Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id;
