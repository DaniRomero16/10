
USE sakila;

#1 Which actors have the first name 'Scarlett'

select * 
from actor a
where a.first_name = 'scarlett';

#2 Which actors have the last name 'Johansson'
select * 
from actor a
where a.last_name = 'johansson';

#3 How many distinct actors last names are there?

select count(distinct last_name)
from actor;

#4 Which last names are not repeated?

select last_name
from actor
group by last_name
having count(*) = 1;

#5 Which last names appear more than once?

select last_name
from actor
group by last_name
having count(*) > 1;

#6 Which actor has appeared in the most films?

select a.first_name, a.last_name
from film_actor f inner join (actor a) on (f.actor_id = a.actor_id)
group by f.actor_id
order by count(*) desc
limit 1;

#7 Is 'Academy Dinosaur' available for rent from Store 1?

select *
from rental r
inner join inventory i on (i.inventory_id = r.inventory_id)
inner join film f on (i.film_id = f.film_id)
where f.title = 'Academy Dinosaur' and r.return_date is null and i.store_id = 1;

#8 When is 'Academy Dinosaur' due?



#9 What is that average running time of all the films in the sakila DB?
#10 What is the average running time of films by category?
#11 What are the currently overdue rentals?
#12 List film's titles with their sum of rental amount
#13 List store's cities with their sum of rental amount
#14 Who is the employee with higher number of rentals
#15 What's the most rented film
#16 What's the most rented film category
#17 Who is the actor whose films have produced the most rented amount
#18 What's the monthly revenue of all stores
