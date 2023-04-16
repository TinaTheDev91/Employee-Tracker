const connection = require('../config/connection');
const cTable = require('console.table');

connection.query(
    'SELECT * FROM department',
    function(err, results) {
      console.table(results); 
    }
  );

  module.exports = viewDept;