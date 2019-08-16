-- https://www.codewars.com/kata/sql-basics-simple-join/train/sql

SELECT
    products.*,
    companies.name as company_name
FROM
    products
    JOIN
    companies
    ON products.company_id = companies.id