const connection = require('../config/connection');
const cTable = require('console.table');

function viewEe() {
    connection.promise().query("SELECT * FROM employee")
        .then(([data]) => {
            console.table(data)
            console.log(`The table has been generated!`)
        })}

  module.exports = viewEe;