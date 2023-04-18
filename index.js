const inquirer = require('inquirer');
const viewEe = require('./queries/viewEe');
const viewDept = require('./queries/viewDept');
const viewRole = require('./queries/viewRole');
const addDept = require('./queries/addDept');
const addEe = require('./queries/addEe');
const addRole = require('./queries/addRole');
const updateRole = require('./queries/updateRole');

function chooseTask() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee'
            ],
            name: 'taskChoice'
        }

        ]
    )
    .then(res => {
        var task
        switch (res.taskChoice) {
            case 'View all departments':
                task = new viewDept();                
                break;
            case 'View all roles':
                task = new viewRole();
                break;
            case 'View all employees':
                task = new viewEe();
                break;
            case 'Add a department':
                task = new addDept();
                break;
            case 'Add a role':
                task = new addRole();
                break;
            case 'Add an employee':
                task = new addEe();
                break;
            case 'Update an employee':
                task = new updateRole();
        }
    })
}

chooseTask();