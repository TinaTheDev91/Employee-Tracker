const connection = require('../config/connection');
const cTable = require('console.table');

class viewEe {
    constructor() {}
        generate() {
            connection.promise().query("SELECT * FROM employee")
            .then(([rows]) => {
                console.table(rows);
            })

            generate();
        }
        
        
    }

  module.exports = viewEe;