const db = require("../models");
// const request = require("request");
// const cheerio = require("cheerio");
// const userController = require("./userController")

function getFam(userEmail) {
  console.log("getFam userEmail: " + userEmail);
  db.Users.find({ email: userEmail })
    .then(data => {
      console.log("this happens" + JSON.stringify(data));
      return data;
    })
    .catch(err => console.log(err));
}

module.exports = {
  scraper:  function queryFam(req, res) {
    db.Users.find({ email: req.body.email }, 'family name birthday')
    .then(data => {
      console.log("this happens" + JSON.stringify(data[0].family));
      var promises = data[0].family.map(item => {

        return scrape(item).then(results => {
          return results;
        });
      });
      Promise.all(promises).then(results => res.json(results));
      })
    .catch(err => console.log(err));


  },

  scraperX: function queryFam(req, res) {
    db.Users.find({ email: req.body.email }, "family name birthday")
      .then(data => {
        console.log(JSON.stringify(data));

        // var promises = data[0].family.map(item => {
        //   return scrape(item).then(results => {
        //     return results;
        //   })
        // })

        // Promise.all(promises).then(results => res.json(results));
      })
      .catch(err => res.json(err));
  }
};

function scrape(item) {
  //console.log("I promise...");
  return new Promise((resolve, reject) => {
    //console.log("item = " + item);
    const url = buildQueryURL(item);

    ///////////////////////////////////////////

    // request("https://www.nytimes.com/", function(error, response, html) {
    //   // Then, we load that into cheerio and save it to $ for a shorthand selector
    //   var $ = cheerio.load(html);
    //   const scrapeArray = [];
    //   $("article").each(function(i, element) {
    //     if (i < 2) {
    //       // pick apart the html to get field values
    //       title = $(this).find("h2").text();
    //       if ($(this).find("ul").length) {
    //         summary = $(this).find("li").first().text();
    //       } else {
    //         summary = $(this).find("p").text();
    //       };
    //       link = "https://www.nytimes.com" + $(this).find("a").attr("href");
    //       // set up the dbEvent object
    //       var result = {};
    //       result.FamMem = item._id;
    //       result.birthday = item.birthday;
    //       result.title = title;
    //       result.summary = summary;
    //       result.link = link;

    //       scrapeArray.push(result);

    //       db.Events.create(result)
    //       .then(function(dbEvent) {
    //         db.Family.findOneAndUpdate(
    //           { _id: item._id },
    //           { $push: { events: dbEvent._id } }
    //         )
    //         .then(function(dbFam) {
    //             console.log(dbFam);
    //           })
    //         .catch(function(err) {
    //           console.log(err);
    //         });
    //       })
    //       .catch(function(err) {
    //         console.log(err);
    //       });

    //     } // end of if (i < ....
    //     }); // end of for each
    //   return resolve(scrapeArray);
    // });  // end of request
  });
}

function buildQueryURL(item) {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

  // Grab text the user typed into the search input, add to the queryParams object
  //queryParams.q = "headline";
  // If the user provides a startYear, include it in the queryParams object
  console.log("searching for " + item.name + " - " + item.birthday);
  queryParams.begin_date = item.birthday.replace(new RegExp("-", 'g'), "");
  queryParams.end_date = item.birthday.replace(new RegExp("-", 'g'), "");
  // Logging the URL so we have access to it for troubleshooting

  // console.log("---------------\nURL: " + queryURL + "\n---------------");
  // console.log(queryURL + $.param(queryParams));

  const URLparams = new URLSearchParams(Object.entries(queryParams));
  URLparams.toString();

  console.log(queryURL + URLparams);

  return queryURL + URLparams;
}
