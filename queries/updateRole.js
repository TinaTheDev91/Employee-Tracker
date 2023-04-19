const inquirer = require('inquirer');
const connection = require('../config/connection');
const cTable = require('console.table');
const viewEe = require('./viewEe');

function updateRole() {
    connection.promise().query('SELECT * from employee')
    .then(([data]) => {
        let employees = data;
        console.table(employees);
        // console.log(`this is inside the updatedRole`);
    })
    
    .then((employees) => inquirer.prompt([
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
    ]))
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