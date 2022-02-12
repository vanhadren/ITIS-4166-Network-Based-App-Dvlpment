const http = require('http');
const fs = require('fs');
const { off } = require('process');


const port = 8080;
const host = 'localhost';

//create server and add requestListener as an argument to createServer method
const server = http.createServer((req, res) => {
 
 /*   console.log("method", req.method,);
    console.log("url", req.url);
    console.log("header", req.headers);
*/

   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');

   let path= './';

        if(req.url === '/'){
            path = path + 'index.html';
        }else if(req.url === '/contact'){
            path = path+'views/contact.html';
        }else if(req.url === '/about'){
            path = path + 'views/about.html';
        }else{
            res.statusCode = 404;
            path = path + 'views/404.html';
        }

   fs.readFile(path, (err,data) =>{
       if(err){
            console.log(err);
            res.end();
       }else{
            res.write(data);
            res.end();
       }
   });

/*   res.write('<p>hello</p>');
   res.end(); 
*/
});
/* 
* ALT server creation replaced by above*
const server = http.createServer();
server.on('request', (req, req) => {

});
*/
server.listen(port, host, () => {
    console.log('the server is running on port ', port);
});

