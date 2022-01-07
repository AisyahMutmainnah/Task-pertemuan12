//TODO 3: Import data students dari folder data/students.js
//code here
const student = require("../data/students")

//import model student
const Student = require("../models/Student");


//Buat class StudentController
//ini menggunakan res.json 
class StudentController {
    async index(req, res) {
       const students = await Student.all();

        const data = {
            message: "Menampilkan semua students",
            data: students,
       };

       res.json(data);
    }
    
        //TODO 4: Tampilkan data students
        //code here
        /*const data = {
            message: "Menampilkan semua students",
            data: students,
    };

    res.json(data);
    */
    


    async store(req, res) {
       // const { nama } = req.body;

        const student = await Student.create(req.body)
        
        //TODO 5: Tambahkan data students
        //code here
        //student.push(nama)
        const data = {
            message: `Menambahkan data students: `, //req.body.nama utk menangkap data json yg diberikan
            data: student,
    };

    res.json(data);
}

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        //TODO 6: Update data students
        //code here
        student.splice(id,2,nama)
        const data = {
        message: `Mengedit data students id ${id}, nama ${nama}`,
        data: [student],
    };

    res.json(data);
}

    destroy(req, res) {
        const { id } = req.params;
        
        //TODO 7: Hapus data students
        //code here
        student.splice(id,2)
        const data = {
        message: `Menghapus data students id ${id}`,
        data: [student],
    };

    res.json(data);
}

}


/*
//ini menggunakan res.send
class StudentController {
    index(req, res) {
        res.send("Menampilkan semua students");
    }

    store(req, res) {
        const { nama } = req.body;
        res.send("Menambahkan data students: " + nama); //req.body.nama utk menangkap data json yg diberikan
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengedit data students id: ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send("Menghapus data students id: " + id);
    }
}

*/

//Membuat object StudentController
const object = new StudentController();

//Export object StudentController
module.exports = object;