import axios from "axios";

export default {
    getUser: function() {
        return axios.get("/login");
    },
    registerUser: function() {
        return axios.get("auth/register");
    },
}