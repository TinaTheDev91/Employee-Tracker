const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');

function addDept() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the department id?',
            name: 'id',
            validate: (id) => Number.isInteger(+id) == true || 'Your id must be a unique integer'
        },
        {
            type: 'input',
            message: 'What is the department name?',
            name: 'name'
        }
    ])
    .then(res => {
        connection.query(
            `INSERT INTO department (id, dept_name) VALUES (${res.id}, "${res.name}");`,
            function viewDept() {
                connection.promise().query("SELECT * FROM department")
                    .then(([data]) => {
                        console.table(data)
                        console.log(`Here is the updated table!`)
                    })})
            }
          );        

    
}



module.exports = addDept;