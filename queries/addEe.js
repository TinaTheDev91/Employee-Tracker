const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');

function addEe() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee id?',
            name: 'id',
            validate: (id) => Number.isInteger(+id) == true || 'Your id must be a unique integer'
        },
        {
            type: 'input',
            message: 'First name?',
            name: 'fname'
        },
        {
            type: 'input',
            message: 'Last name?',
            name: 'lname'
        },
        {
            type: 'input',
            message: 'Role id?',
            name: 'role'
        },
        {
            type: 'input',
            message: 'Manager id?',
            name: 'manager'
        }
    ])
    .then(res => {
        connection.query(
            `INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (${res.id}, "${res.fname}", "${res.lname}", ${res.role}, ${res.manager});`,
            function viewEe() {
                connection.promise().query("SELECT * FROM employee")
                    .then(([data]) => {
                        console.table(data)
                        console.log(`Here is the updated table!`)
                    })})
            }
          );        

    }


module.exports = addEe;