use employees;

select count(*) from employees;

select s.salary, e.first_name
from salaries s
inner join employees e on (s.emp_no = e.emp_no)
where current_date() between s.from_date and s.to_date
order by s.salary desc;

-- #1 List all employees hired on December of 1985
explain
select first_name,last_name, hire_date
from employees
where hire_date >= '1985-12-01' and hire_date < '1986-01-01';

create index emp_hire_date on employees(hire_date);

-- #2 List all employees with last name 'Baba'
explain
select first_name, last_name
from employees
where last_name = 'baba';

create index emp_last_name on employees(last_name);

-- #3 List all employees with last name 'Baba' and first name starting with 'S'
explain
select first_name, last_name
from employees
where last_name = 'baba' and first_name like 's%';

create index emp_last_first on employees(last_name, first_name);

-- #4 List current number of employees by title
explain
select count(emp_no), title
from titles
where to_date >= current_date()
group by title;

create index tit_to_date on titles(to_date);

-- #5 List current average salary of employees by title

select avg(s.salary), t.title
from titles t
inner join salaries s on (s.emp_no = t.emp_no and s.to_date > current_date)
where t.to_date > current_date
group by t.title
order by avg(s.salary) desc;

create index sal_salary on salaries(salary);

-- #6 List all employees hired on 01/01/1999
explain
select first_name, last_name, hire_date
from employees
where hire_date = '1999-01-01';


-- #7 List all employees with salary higher than Manu Leslie's
explain
select s.salary, e.first_name, e.last_name
from salaries s
inner join employees e on (s.emp_no = e.emp_no)
where (s.to_date > current_date()) and s.salary >=
(select s.salary
from salaries s
inner join employees e on ((s.emp_no = e.emp_no) and e.first_name = 'Manu' and e.last_name = 'Leslie' and (s.to_date > current_date())));

-- #8 List marketing staff with higher salary 
explain
select e.emp_no, s.salary, e.first_name, e.last_name, t.title, d.dept_name
from employees e
inner join salaries s on (s.emp_no = e.emp_no and (s.to_date > current_date()))
inner join titles t on (t.emp_no = e.emp_no and (t.to_date > current_date()) and t.title = 'Staff')
inner join dept_emp de on (de.emp_no = e.emp_no and (de.to_date > current_date()))
inner join departments d on (de.dept_no = d.dept_no and d.dept_name = 'Marketing')
where (s.salary, t.title, d.dept_no) = (
	select max(s.salary), t.title, d.dept_no
    from employees e
	inner join salaries s on (s.emp_no = e.emp_no and (s.to_date > current_date()))
	inner join titles t on (t.emp_no = e.emp_no and (t.to_date > current_date()) and t.title = 'Staff')
	inner join dept_emp de on (de.emp_no = e.emp_no and (de.to_date > current_date()))
	inner join departments d on (de.dept_no = d.dept_no and d.dept_name = 'Marketing')
    group by t.title, d.dept_no
);

-- #9 Get the department and title with lowest average salary

select avg(s.salary), t.title, d.dept_name
    from employees e
	inner join salaries s on (s.emp_no = e.emp_no and (s.to_date > current_date()))
	inner join titles t on (t.emp_no = e.emp_no and (t.to_date > current_date()))
	inner join dept_emp de on (de.emp_no = e.emp_no and (de.to_date > current_date()))
	inner join departments d on (de.dept_no = d.dept_no)
    group by t.title, d.dept_name
    order by avg(s.salary)
    limit 1;



show indexes from employees;

create index emplo_fechas on employees(hire_date);

explain
select *
from employees
where hire_date > date_add('2000-01-01',  interval - 90 day);

explain
select hire_date
from employees
where first_name = 'percy';

use employees;



