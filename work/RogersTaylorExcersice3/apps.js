const express = require('express');

const app = express();
let port = 3030;
let host = 'localhost'

let students = [
    {id: 1 , name: 'alice', major: 'itcs'}, 
    {id: 2 , name: 'bob', major: 'bio'},
    {id: 3 , name: 'Charlie', major: 'phy'}
];

app.use(express.static('public'));

/** needs to be on top or work be ran */
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();

});
/*
app.use((req, res, next) => {
    console.log('this is the second middleware function');
    next();
    //res.send('second middleware');
   });
*/
app.get('/', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home Page');
    //res.send('Home Page');  /** short-hand version of above code is auto set to 302(found) */ 
    //console.log(__dirname);

    console.log(req.url);
    console.log(req.query);
    res.sendFile('./public/views/index.html', { root:__dirname });
    
});

app.get('/students', (req, res) => {
    res.json(students);
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

app.use((req, res, next) => {
    res.status(404).send('page cannot be found');
})

app.listen(port, host, () => { 
        console.log("The server is runing at port: " ,port);
    });

