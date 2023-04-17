const connection = require('../config/connection');
const cTable = require('console.table');

function viewDept() {
    connection.promise().query("SELECT * FROM department")
        .then(([data]) => {
            console.table(data)
            console.log(`The table has been generated!`)
        })}

  module.exports = viewDept;