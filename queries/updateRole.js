const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');

function updateRole() {
    connection.query(
        `SELECT id, first_name, last_name, role_id from employee;`,
        function (data) {
            console.table(data)
        }
    ) 
    inquirer.prompt([
        {
            type: 'input',
            message: 'Which employee would you like to update? Please enter their id.',
            name: 'id',
            validate: (id) => Number.isInteger(+id) == true || 'Your id must be a unique integer'
        },
        {
            type: 'input',
            message: 'What is the id of the new role?',
            name: 'role'
        }
    ])
    .then(res => {
        connection.query(
            `UPDATE employee SET role_id = ${res.role} WHERE id = ${res.id};`,
            function viewEe() {
                connection.promise().query("SELECT * FROM employee")
                    .then(([data]) => {
                        console.table(data)
                        console.log(`Here is the updated table!`)
                    })})
            }
          );        

    
}


module.exports = updateRole;