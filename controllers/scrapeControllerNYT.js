const db = require("../models");
const request = require("request");
const cheerio = require("cheerio");
const userController = require("./userController")

module.exports = {
    scraper: function queryFam(req, res) {  // where is this going to get a userEmail?
      userData = userController.getUserPlus(userEmail);
          var promises = userData.data[0].family.map(item => {
            return scrape(item).then(results => {
              return results;
            })
          })
  
          Promise.all(promises).then(results => res.json(results)); 
  
      }
  }
  
function scrape(item) {
  //console.log("I promise...");
  return new Promise ((resolve, reject) => {
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
    console.log("searching for "+ item.name + " - " + item.birthday);
    queryParams.begin_date = (item.birthday).replace('-', '');
    queryParams.end_date =  (item.birthday).replace('-', '');
    // Logging the URL so we have access to it for troubleshooting

    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
  }
 