var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + '/views'))
app.listen(process.env.PORT || 525);

app.get("/home", function(req, res) {
    res.render("home");
    console.log("Home page");

});
app.get("/", function(req, res) {
    console.log("Hello!")
})
console.log("Start Now!");
