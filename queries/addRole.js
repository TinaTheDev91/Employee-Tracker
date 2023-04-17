const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the role id?',
            name: 'id',
            validate: (id) => Number.isInteger(+id) == true || 'Your id must be a unique integer'
        },
        {
            type: 'input',
            message: 'What is the title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the salary',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'What is the department id?',
            name: 'deptid'
        }
    ])
    .then(res => {
        connection.query(
            `INSERT INTO role (id, title, salary, department_id) VALUES (${res.id}, "${res.title}", ${res.salary}, ${res.deptid});`,
            function viewRole() {
                connection.promise().query("SELECT * FROM role")
                    .then(([data]) => {
                        console.table(data)
                        console.log(`Here is the updated table!`)
                    })})
            }
          ); 


    }


module.exports = addRole;