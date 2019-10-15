import axios from "axios";

export default {
  // Gets all family members
  getFamily: function(userEmail) {
    return axios.post("/api/family/getfamily", userEmail);
  },
  // Gets the familymember with the given id
  getFamilyMember: function(id) {
    return axios.get("/api/family/" + id);
  },
  // Deletes the book with the given id
  deleteFamily: function(familyData) {
    return axios.post("/api/family/delete", familyData);
  },

  saveFamily: function(familyData) {
    return axios.post("/api/family", familyData);
  },
  login: function(userData) {
    console.log("API sees login...");
    console.log(userData); 
    return axios.post("/api/user/login", userData);
  },
  setUser: function(userData) {
    console.log("API sees setUser...");
    console.log(userData); 
    return axios.post("/api/family/setuser", userData);
  },
  newUser: function(userEmail) {
    return axios.post("/api/user/new", userEmail);
  },
  scrapeFamily: function(userEmail) {
    return axios.post("/api/family/scrape", userEmail);
  },
  toggleIsSaved: function(event) {
    //console.log("API sees toggleIsSaved");
    //console.log(event);
    return axios.put("/api/events/toggle", event);
  },
  getEvents: function (userEmail) {
    return axios.post("/api/events/saved", userEmail);
  },
  getAnswerKey: function() {
    return axios.get("/api/events/answerkey");
  },
  getUserPlus: function(userEmail) {
    return axios.post("/api/user/getuserplus", userEmail);
  }
  






};
