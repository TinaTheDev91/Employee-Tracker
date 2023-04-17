const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');

function addEe() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee id?',
            name: 'id',
            validate: (id) => Number.isInteger(id) === true || 'Your id must be a unique integer'
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
            name: 'roleid'
        },
        {
            type: 'input',
            message: 'Manager id?',
            name: 'mgrid'
        }
    ])
    .then(res => {
        connection.query(
            `INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (${res.id}, "${res.fname}", "${res.lname}", "${res.roleid}", "${res.mgrid}");`,
            function(err, results) {
              console.table(results); 
            }
          );

    })
}

module.exports = addEe;