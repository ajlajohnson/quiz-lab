"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");


routes.get("/scores", (req, res) => {
    let queryString = `SELECT * FROM scores`;
    pool.query(queryString).then(response => {
        res.json(response.rows);
    });
})



routes.post("/scores", (req, res) => {
    let body = req.body;
    let queryString = `INSERT INTO scores(username, score) 
	VALUES 
	($1::VARCHAR, $2::SMALLINT)`;

    pool.query(queryString, [req.body.username, req.body.score]).then((response) => {
        res.json(req.body);
    });
});



module.exports = routes;