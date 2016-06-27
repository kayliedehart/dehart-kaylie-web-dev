/**
 * Created by kayliedehart on 6/23/16.
 */
var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'address_book',
    debug    :  false
});

function handle_database(req,res) {

    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

app.get("/",function(req,res){-
    handle_database(req,res);
});

app.listen(3000);


/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dbuser',
    password : 's3kreee7'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/
