var sqlite3 = require('sqlite3').verbose();

//var db = new sqlite3.Database('/home/joycc/github/NodeJS_Express_Redis_User_Login/routes/user.db');
var db = new sqlite3.Database('./.user.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
//db.run("create table if not exists users(name varchar(20), position varchar(30), password varchar(20)");
//


exports.create = function(){
    db.run("CREATE TABLE IF NOT EXISTS notes (ts DATETIME, author VARCHAR(255), note TEXT)");
}

this.create();

/*
exports.getUsersName = function(){
    usersName = db.run('select * from users');
    return usersName;
};
*/

/*
exports.insertLine = function(name, position, password){
    result = db.run('insert into user.db(name,position,password) values (name,position,password)');
    console.log(result);
};
*/

//this.insertLine('111','11','111');
//console.log(this.getUsersName());
