import axios from "axios";

export default axios.create({
    baseURL: "https://reqres.in",
    headers: {
        "Content-type": "application/json"
    }
});


