const connection = require('../config/connection');
const cTable = require('console.table');

function viewRole() {
    connection.promise().query("SELECT * FROM role")
        .then(([data]) => {
            console.table(data)
            console.log(`The table has been generated!`)
        })}


  module.exports = viewRole;