// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const storyRoutes = require('./routes/storyRoutes');


//create app
const app = express();



//configre app
let port = 3000;
let host = "localhost";
app.set('view engine','ejs');


//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.get('/', (req,res) => {
    res.render('index');
});

app.use('/stories', storyRoutes);


//start the server
app.listen(port, host, () => {
    console.log('servers is running on port',port);
})