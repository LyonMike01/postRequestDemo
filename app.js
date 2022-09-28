const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")


const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var friends = ["Mike", "Lyon", "Tope", "Temi", "Beji"];


app.get("/", function (req, res) {
	res.render("home");
});


app.post("/addfriend", function (req, res) {
	var newfrnd = (req.body.newfriend);
	friends.push(newfrnd);
	res.redirect("/friend");
});


app.get("/friend", function (req, res) {
	res.render("friends", {friendList: friends});
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running on port 3000");
});