const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Family collection and inserts the people below
// in order to initially populate the database, 
// run the following command at the project root: `npm run seed`.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/familyreunion"
);

const id1 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562654");
const fam1 = new mongoose.Types.ObjectId("5d95ece648a17c63d80dca08");
const fam2 = new mongoose.Types.ObjectId("5d9694c0f4104658b0a69021");
const id4 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562655");
const fam3 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562656");
const fam4 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562657");
const fam5 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562658");
const fam6 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562659");
const fam7 = new mongoose.Types.ObjectId("5d98c9ab073a76c86a562660");

const userSeed = [
  {
    _id : id1,    
    email : "crystal@bell.com",
    password : "1234567",
    family : [ 
      fam1, 
      fam2,
      fam3,
      fam4,
      fam5,
      fam6,
      fam7
  ]
},
  {
    _id : id4,
    email : "migelrodregiz12@yahoo.com",
    password : "1234567"
  }
];

const familySeed = [
  {
    _id : fam1,
    name : "Jimmy Page",
    birthday : "1944-01-09"
  },
  {
    _id : fam2,
    name: "Kim Jung-un",
    birthday: "1984-01-08"
  },
  {
    _id : fam3,
    name: "Eddie Murphy",
    birthday: "1961-04-03"
  },
  {
    _id : fam4,
    name: "Mr Rogers",
    birthday: "1928-03-20"
  },
  {
    _id : fam5,
    name: "Jim Henson",
    birthday: "1936-09-24"
  },
  {
    _id : fam6,
    name: "Harrison Ford",
    birthday: "1942-07-13"
  },
  {
    _id : fam7,
    name: "Madonna",
    birthday: "1958-08-16"
  }
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log("Users collection: " + data.result.n + " records inserted!");
//    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Family
  .remove({})
  .then(() => db.Family.collection.insertMany(familySeed))
  .then(data => {
    console.log("Family collection: " + data.result.n + " records inserted!");
  //  process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

