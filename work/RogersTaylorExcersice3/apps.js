const express = require('express');
const app = express();
let port = 3000;
let host = 'localhost'


app.get('/', (req, res) => {
    //res.statusCode = 200;
    //res.end('Home Page');
/** short-hand version of above */
    //res.send('Home Page');    
    console.log(__dirname);
    res.sendFile('.views/index.html', { root:__dirname });
    
    
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

app.listen(port, host, () => { 
        console.log("The server is runing at port: " ,port);
    });

