const connection = require('../config/connection');
const cTable = require('console.table');

connection.query(
    'SELECT * FROM employee',
    function(err, results) {
      console.table(results); 
    }
  );

  module.exports = viewEe;