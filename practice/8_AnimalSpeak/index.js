/*
 * IMPORTANT:
 * If you download this folder and would like to run it directly, simply:
 *   $ npm install      // to install any required NodeJS package listed in package.json
 *   $ node index.js    // to start the application server
 *
 *
 * If you'd like to replicate this demo, then
 *   $ npm init                     // to start a NodeJS application
 *   $ touch index.js               // to create a JS file for creating a NodeJS server
 *   $ npm install --save express   // install Express
 *   $ node index.js                // to start the application server
 */

/* Require Express API and start our application instance */
var express = require("express");
var app = express();

/* The handler for the DEFAULT route */
app.get("/", function(req, res){
    res.send("<h1>Welcome to Animal Speaking</h1>");
});

/* 
 *    The handler for the "/speak/:animal/" route 
 *    where "/speak" is the static route path
 *          "/:animal" is the parameter routh path which will be included in req.params
 */
app.get("/speak/:animal", function(req, res){
   var sounds = {
       pig: 'Oink',
       cow: 'Moo',
       dog: 'Woof Woof'
   };
   var animal = req.params.animal.toLowerCase();
   var saying = sounds[animal];
   if (saying === undefined)
        saying = "nothing";
   res.send("The " + animal + " says '" + saying + "'");
});

/* 
 *    The handler for the "/repeat/:msg/:occurence/" route 
 *    where "/repeat" is the static route path
 *          "/:msg/:occurence" are the parameter routh paths which will be included in req.params
 */
app.get("/repeat/:msg/:occurence", function(req, res){
	var msg = req.params.msg;							
	var occurence = parseInt(req.params.occurence);
	var str = "";
	for (var i=0; i<occurence; i++)
		str += msg + " ";
	res.send(str);
});

/* The handler for undefined routes */
app.get("*", function(req, res){
   res.send("<h2 style='color: red;'> Sorry, Page not found...What are you doing with your life?</h2>"); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
});