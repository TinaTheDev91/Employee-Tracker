const connection = require('../config/connection');
const cTable = require('console.table');

class viewRole {
    constructor() {}
        generate() {
            connection.promise().query("SELECT * FROM role")
            .then(([rows]) => {
                return rows;
            })

            generate();
        }
        
        
    }


  module.exports = viewRole;