const connection = require('../config/connection');
const cTable = require('console.table');

class viewDept {
    constructor() {}
        generate() {
            connection.promise().query("SELECT * FROM department")
            .then(([data]) => {
                console.table(data)
            })

            generate();
        }      
        
    }

  module.exports = viewDept;