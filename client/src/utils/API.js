import axios from "axios";

export default {
  // Gets all family members
  getFamily: function() {
    return axios.get("/api/family");
  },
  // Gets the familymember with the given id
  getFamilyMember: function(id) {
    return axios.get("/api/family/" + id);
  },
  // Deletes the book with the given id
  deleteFamily: function(id) {
    return axios.delete("/api/family/" + id);
  },
  // Saves a book to the database
  saveFamily: function(familyData) {
    return axios.post("/api/family", familyData);
  },
  login: function(userData) {
    console.log("API sees login...");
    console.log(userData); 
    return axios.post("/api/family/login", userData);
  },
  setUser: function(userData) {
    console.log("API sees setUser...");
    console.log(userData); 
    return axios.post("/api/family/setuser", userData);
  },
  newUser: function(userData) {
    return axios.post("/api/family/newuser", userData);
  },
  scrapeFamily: function(familyList) {
    return axios.post("/api/family/scrape", familyList);
  },
  toggleIsSaved: function(event) {
    //console.log("API sees toggleIsSaved");
    //console.log(event);
    return axios.put("/api/events/toggle", event);
  },
  getEvents: function () {
    return axios.get("/api/events/saved");
  },
  getAnswerKey: function() {
    return axios.get("/api/events/answerkey");
  },
  getUserPlus: function() {
    return axios.get("/api/users/getuserplus");
  }
  






};
