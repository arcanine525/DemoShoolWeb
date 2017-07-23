var express = require('express');
var app = express();

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static(__dirname + '/views'))
app.listen(525);

app.get("/home", function (req, res) {
    res.render("home");
    console.log("Home page");
    
});
console.log("Start Now!");