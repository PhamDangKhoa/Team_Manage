const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const parser = bodyParser.json();
const Member = require('./models/Member');
const Project = require('./models/Project');


app.listen(4000, console.log("server is running"));


app.post('/member', parser, (req, res) => {
    const { name, phone, project } = req.body;
    const mem = new Member(name, phone, project)
    console.log(mem);
    mem.addMem(err => {
        console.log(err)
    })
});

app.post('/project', parser, (req, res) => {
    const { name, listmember } = req.body;
    const pro = new Project(name, listmember)
    console.log(pro);
    pro.addPro(err => console.log(err));

});


app.get('/member', (req, res) => {
    Member.getAllMem((err, arrMem) => {
        if (err) return res.send('Co Loi');
        res.send({ arrMem })
    })
})

app.get('/project', (req, res) => {
    Project.getAllProject((err, arrPro) => {
        if (err) return res.send('Co Loi');
        res.send({ arrPro })
    })
})