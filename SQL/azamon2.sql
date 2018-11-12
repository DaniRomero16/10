
use azamon;

-- #19 List number of products by brand name.
select count(*), brand_name
	from products
    group by brand_name;

-- #20 List number of sales by product name.
select count(s.sale_id) as 'Times Sold', p.name
	from sales s
    inner join products p on (s.product_id = p.product_id)
    group by p.name;

-- #21 List number of sales by username.
select count(s.sale_id) as 'Times Sold', u.name
	from sales s
    inner join users u on (s.user_id = u.user_id)
    group by u.name;

-- #22 List average sale price by username.
select AVG(s.price) as 'AVG Price', u.name
	from sales s
    inner join users u on (s.user_id = u.user_id)
    group by u.name;

-- #23 List all usernames who spent over 20 in the last month.
select u.name, sum(s.price)
	from users u
    inner join sales s on (u.user_id = s.user_id)
	where date_add(s.creation_date, interval -1 month)  
    group by u.user_id
    having sum(s.price) > 20;
    
-- #24 List all product names and their number of sales ordered by number of sales.
select count(s.sale_id) as 'Times Sold', p.name
	from sales s
    inner join products p on (s.product_id = p.product_id)
    group by p.name
    order by count(s.sale_id);
    
-- #25 List all usernames with the number of different products they bought.
select u.name, count(distinct(s.product_id))
	from sales s
    inner join users u on (s.user_id = u.user_id)
    group by u.name;
    
-- #26 List the sum of sales with price over 10 by product only if the sum of sales for that product is higher than 20.
select sum(s.price), p.name
	from sales s
    inner join products p on (s.product_id = p.product_id)
    where s.price > 10
    group by p.product_id
    having sum(s.price) > 20;
    
    
    
    
    
    