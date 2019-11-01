const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

/// if warnings are an issue consider invoking npm-update-all as spelled out here: https://www.npmjs.com/package/npm-update-all

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//app.use(express.static(path.join(__dirname, "client", "build")))

// how-to says use code above while code below is existing and looks good also, which is it?

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/familyreunion",
//mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_62dv840c:mongodman1@ds335678.mlab.com:35678/heroku_62dv840c",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,
  useFindAndModify: false }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
