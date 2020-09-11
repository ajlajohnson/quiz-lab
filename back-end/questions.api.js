"use strict";
// require the express module
const express = require("express");
// create a new Router object
const routes = express.Router();
const pool = require("./connection");


routes.get("/questions", (req, res) => {
    let queryString = `SELECT * FROM questions ORDER BY RANDOM() LIMIT 10`;
    pool.query(queryString).then((response) => {
        res.json(response.rows);
    });
})




module.exports = routes;