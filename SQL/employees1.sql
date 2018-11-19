use employees;

select count(*) from employees;

select s.salary, e.first_name
from salaries s
inner join employees e on (s.emp_no = e.emp_no)
where current_timestamp() between s.from_date and s.to_date
order by s.salary desc
limit 1;

-- #1 List all employees hired on December of 1985

select first_name,last_name, hire_date
from employees
where hire_date like '1985-12%';

-- #2 List all employees with last name 'Baba'

select first_name, last_name
from employees
where last_name like 'baba';

-- #3 List all employees with last name 'Baba' and first name starting with 'S'

select first_name, last_name
from employees
where last_name like 'baba' and first_name like 's%';

-- #4 List current number of employees by title

select count(emp_no), title
from titles
where current_timestamp() between from_date and to_date
group by title;

-- #5 List current average salary of employees by title

select avg(s.salary), t.title
from titles t
inner join salaries s on (s.emp_no = t.emp_no)
where (current_timestamp() between s.from_date and s.to_date) and (current_timestamp() between t.from_date and t.to_date)
group by title;

-- #6 List all employees hired on 01/01/1999

select first_name, last_name, hire_date
from employees
where hire_date like '1999-01-01';

-- #7 List all employees with salary higher than Manu Leslie's

select s.salary, e.first_name, e.last_name
from salaries s
inner join employees e on (s.emp_no = e.emp_no)
where (current_timestamp() between s.from_date and s.to_date) and s.salary > 
(select s.salary
from salaries s
inner join employees e on ((s.emp_no = e.emp_no) and e.first_name = 'Manu' and e.last_name = 'Leslie' and (current_timestamp() between s.from_date and s.to_date)))
order by s.salary asc;

