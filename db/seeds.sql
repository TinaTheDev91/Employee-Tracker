INSERT INTO department (id, dept_name)
VALUES  (147, "Customer Support"),
        (258, "Office Support"),
        (369, "Development");

INSERT INTO role (id, title, salary, department_id)
VALUES  (123, "Administrative Assistant", 55000, 258),
        (456, "Software Engineer", 95000, 369),
        (789, "Data Analyst", 95000, 369),
        (321, "Customer Service Rep", 45000, 147);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, "Virginia", "Berry", 123, null),
        (002, "Warren", "Howard", 456, null),
        (003, "Stewart", "Forsyth", 789, null),
        (004, "Carol", "Wilkins", 321, 009),
        (005, "Michelle", "Kelly", 123, 001),
        (006, "Evan", "Manning", 456, null),
        (007, "Benjamin", "Bell", 789, null),
        (008, "Steven", "Ellison", 321, 009),
        (009, "Rebecca", "Mackenzie", 321, null),
        (010, "Rose", "Vance", 456, null);