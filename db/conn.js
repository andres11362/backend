const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: ""  
});



const crearConexion = () => {
    conn.connect((err) => {  
        if (err) throw err;  
        console.log("Connected!");  
    }); 
}


module.exports({
    con
})