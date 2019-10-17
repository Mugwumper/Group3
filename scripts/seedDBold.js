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

const userSeed = [
  {
    _id : id1,    
    email : "a1@b.com",
    password : "1234567",
    family : [ 
      fam1, 
      fam2
  ]
},
  {
    _id : id4,
    email : "b2@b.com",
    password : "1234567",
    family : [ 
      fam3  
    ]
  }
];


const e1 = new mongoose.Types.ObjectId("5d96979de5fb6a64b8a53923");
const e2 = new mongoose.Types.ObjectId("5d96979de5fb6a64b8a53924");
const e3 = new mongoose.Types.ObjectId("5d96979ee5fb6a64b8a53925");
const e4 = new mongoose.Types.ObjectId("5d96979ee5fb6a64b8a53926");
const e5 = new mongoose.Types.ObjectId("5d96979ee5fb6a64b8a53927");
const e6 = new mongoose.Types.ObjectId("5d96979ee5fb6a64b8a53928");

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
    _id : fam1,
    name : "Jimmy Page",
    birthday : "1944-01-09",
    events : [ 
        e1, 
        e2
    ]
  },
  {
    _id : fam2,
    name: "Kim Jung-un",
    birthday: "1984-01-08",
    events : [ 
        e3, 
        e4
    ]
  },
  {
    _id : fam3,
    name: "(belongs to b2@b.com)",
    birthday: "1984-01-08",
    events : [ 
        e5, 
        e6
    ]
  }
];

const eventsSeed = [
  /* 1 */
  {
    _id : e1,
    isSaved : false,
    title : "Your Thursday Evening Briefing",
    summary : "Here’s what you need to know at the end of the day.",
    link : "https://www.nytimes.com/2019/10/03/briefing/donald-trump-las-vegas-the-joker.html"
  },

  /* 2 */
  {
    _id : e2,
    isSaved : true,
    title : "Listen to ‘The Daily’",
    summary : "How Rudy Giuliani’s Ukraine operation backfired.",
    link : "https://www.nytimes.com/2019/10/03/podcasts/the-daily/rudy-giuliani-trump-impeachment-ukraine.html"
  },

  /* 3 */
  {
    _id : e3,
    isSaved : true,
    title : "Your Thursday Evening Briefing",
    summary : "Here’s what you need to know at the end of the day.",
    link : "https://www.nytimes.com/2019/10/03/briefing/donald-trump-las-vegas-the-joker.html"
  },

  /* 4 */
  {
    _id : e4,
    isSaved : false,
    title : "Listen to ‘The Daily’",
    summary : "How Rudy Giuliani’s Ukraine operation backfired.",
    link : "https://www.nytimes.com/2019/10/03/podcasts/the-daily/rudy-giuliani-trump-impeachment-ukraine.html"
  },

    /* 5 */
    {
      _id : e5,
      isSaved : false,
      title : "(belongs to B)",
      summary : "this you should not see #1.",
      link : "https://www.nytimes.com/2019/10/03/podcasts/the-daily/rudy-giuliani-trump-impeachment-ukraine.html"
    },

      /* 6 */
  {
    _id : e6,
    isSaved : false,
    title : "(belongs to B)",
    summary : "this you should not see #2.",
  link : "https://www.nytimes.com/2019/10/03/podcasts/the-daily/rudy-giuliani-trump-impeachment-ukraine.html"
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

  db.Events
  .remove({})
  .then(() => db.Events.collection.insertMany(eventsSeed))
  .then(data => {
    console.log("Events collection: " + data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
