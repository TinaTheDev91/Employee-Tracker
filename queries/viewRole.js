const connection = require('../config/connection');
const cTable = require('console.table');

connection.query(
    'SELECT * FROM role',
    function(err, results) {
      console.table(results); 
    }
  );

  module.exports = viewRole;