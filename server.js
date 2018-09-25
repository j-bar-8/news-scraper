// DEPENDENCIES
// ======================================================================
const express = require("express");
const bodyParser = require("body-parser")
const logger = require("morgan");
const mongoose = require("mongoose");

    // SCRAPING TOOLS
const axios = require("axios");
const cheerio = require("cheerio");

    // REQUIRE MODELS
// const db = require("./models");

const PORT = 3000;

    // INITIALIZE EXPRESS
const app = express();

// CONFIGURE MIDDLEWARE
// ======================================================================
    // MORGAN LOGGER
app.use(logger("dev"));
    // BODY-PARSER
app.use(bodyParser.urlencoded({ extended: true }));
    // SERVE PUBLIC FOLDER
app.use(express.static("public"));

// CONNECT TO MONGO DB
// ======================================================================
mongoose.connect("mongodb://localhost/news-scraper", {useNewUrlParser: true});

// ROUTES
// ======================================================================
    // GET ROUTE FOR SCRAPING
app.get("/scrape", function(req, res) {
    axios.get("https://www.democracynow.org").then(function(response) {
        const $ = cheerio.load(response.data);
        // res.json(response.data);
        $("div.headlines ul li").each(function (i,element) {
            let result = {};
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");
            
             console.log(result);
        })
    })
})
// START SERVER
// ======================================================================
app.listen(PORT, function() {
    console.log("App running on port: " + PORT); 
});