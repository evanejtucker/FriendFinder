
var path = require("path");
var express = require("express");

module.exports = function(app) {


	app.use(express.static(__dirname + "/../public"));

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"))
	});

	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	});

	// default path
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	})
};
