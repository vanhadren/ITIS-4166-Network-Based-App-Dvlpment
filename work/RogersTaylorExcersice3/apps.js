const express = require('express');
const app = express();
let port = 3000;
let host = 'localhost'

let students = [{id: 1 , name: 'alice', major: 'itcs'}, 
                {id: 2 , name: 'bob', major: 'bio'},
                {id: 3 , name: 'Charlie', major: 'phy'}];

app.use((req, res, next) => {
    console.log(res.method);
    console.log(res.url);
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home Page');
/** short-hand version of above */
    //res.send('Home Page');    
    //console.log(__dirname);
    console.log(req.url);
    console.log(req.query);
    res.sendFile('./views/index.html', { root:__dirname });
    
});

//send students with particular id back to the client
app.get('/students/:sid', (req, res) => {
   
    console.log(req.params);

    let id = req.params.sid;

    let student = students.find(element => element.id === parseInt(id));

    console.log(student);

    //res.send('Send students with id');
     res.json(student);

});



app.get('/about', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home Page');
/** short-hand version of above */
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home Page');
/** short-hand version of above */
    res.send('Contact Page');
});

app.get('/contact-us', (req, res) => {
    res.redirect(301,'/contact');
});

app.listen(port, host, () => { 
        console.log("The server is runing at port: " ,port);
    });

