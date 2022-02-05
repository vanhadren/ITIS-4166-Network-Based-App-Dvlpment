// modules.export = {};
//module.exports = add; // sets the variable to equal the functions rather than a object

// function wrapper return module.exports
 //module.exports.anything = add;

// exports = modules.exports; //user as a shortcut for module.exports
    //exports.sub = sub;
          exports.add = (x,y) => x+y; /*shortest cut */
    //exports.add = add;
          exports.sub = (x,y) => x-y; /* shortest cut */

            //above replaces below 
                        /* 
                        function add(x,y){
                            return x+y;
                        }
                        function sub(x,y){
                            return x-y;
                        }
                        */
    
//console.log(module.exports); //add function 
//console.log(exports); 




