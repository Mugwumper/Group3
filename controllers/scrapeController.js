const db = require("../models");
//const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
//const router = express.Router();

module.exports = {
  scraper: function queryFam(req, res) {
      db.Family.find({})
      .then(data => { 
        console.log(data);
        


        var promises = data.map(item => {
          return scrape(item).then( results => {
              return results;
          })
        })

        Promise.all(promises).then(results => console.log(results)); 

        res.json(data);
      })
      .catch(err => 
        res.json(err)
      );   
    }
}

function scrape(item) {
  //console.log("I promise");
  return new Promise ((resolve, reject) => {
    //console.log("item = " + item);

  request("https://www.nytimes.com/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    const scrapeArray = [];
    $("article").each(function(i, element) {

      var result = {}; // initialize result each time as {}

      // pick apart the html to get title, summary and link field values
      summary = ""
      if ($(this).find("ul").length) {
        summary = $(this).find("li").first().text();
      } else {
        summary = $(this).find("p").text();
      };

      result.userID = item._id;
      result.name = item.name;
      result.birthday = item.birthday;
      result.title = $(this).find("h2").text();
      result.summary = summary;
      result.link = "https://www.nytimes.com" + $(this).find("a").attr("href");

      scrapeArray.push(result);

      // save article to database
      // var entry = new db.Events(result);
      // entry.save(function(err, doc) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   else {
      //     console.log(doc);
      //   }
      // });

    });
    return resolve(scrapeArray);
  });  // end of Request

  });
}