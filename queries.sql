-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.productname, c.categoryname
from product as p
join category as c
on p.categoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
--select od.orderid, o.shipname, o.orderdate
--from orderdetail as od
--join "order" as o
--on od.orderid = o.id
--where o.orderdate before "2012-08-09"
--⬆GET THIS WORKING⬆


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

