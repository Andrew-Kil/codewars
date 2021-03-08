-- https://www.codewars.com/kata/5910b0d378cc2ba91400000b/train/sql

-- You are working for a local school, and you are responsible for collecting tuition from students. You have a list of all students, some of them have already paid tution and some haven't. Write a select statement to get a list of all students who haven't paid their tuition yet. The list should include all the data available about these students.

-- students table schema

-- name (string)
-- age (integer)
-- semester (integer)
-- mentor (string)
-- tuition_received (Boolean)

SELECT
    *
FROM
    students
WHERE
    tuition_received = false;
