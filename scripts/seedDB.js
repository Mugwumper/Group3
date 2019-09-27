const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Family collection and inserts the people below
// In order to initially populate the database, run the following command at the project root: `npm run seed`.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familyreunion"
);

const familySeed = [
  {
    name: "Mr Rogers",
    birthday: "1928-03-20"
  },
  {
    name: "Jim Henson",
    birthday: "1936-09-24"
  },
  {
    name: "Jimmy Page",
    birthday: "1944-01-09"
  },
  {
    name: "Kim Jung-un",
    birthday: "1984-01-08"
  }

];

db.Family
  .remove({})
  .then(() => db.Family.collection.insertMany(familySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
