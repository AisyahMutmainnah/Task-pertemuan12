//import db
const db = require("../config/database");


//class model student
class Student {
    //method untuk query semua data
    static all() {
        //buat promise : 

        return new Promise((resolve, reject) => {

            //baru masukin query di dalamnya 

            const sql = "SELECT * FROM students";
            db.query(sql, (err, results) => {
           // console.log(results);
            resolve (results);
            });
        });

        /*query ke database
        const sql = "SELECT * FROM students";
        db.query(sql, function (err, results){
           // console.log(results);
            return results;
        }); */
    }

    static async create(data) {
        //return promise
        const id = await new Promise((reslove, reject) => {

            //insert db ke database

            const sql = 'INSERT INTO students SET ?'
            db.query(sql, data, (err, results) => {
                resolve(results, insertId);
            })
        })
       
        return new Promise((resolve, reject) => {
            //query select by id

            const sql = 'SELECT * FROM students WHERE id = ?'
            db.query(sql, id, (err, results) => {
                resolve(results)
            })
        })
    }

}


//export class
module.exports = Student;

