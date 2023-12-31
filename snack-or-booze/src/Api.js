// import axios from "axios";

// const BASE_API_URL = "http://localhost:5000";

// /* 
//   json-server will give you CRUD endpoints on snacks and drinks.
//   Here we've provided you with a single action to get all drinks.

//   You'll need to add to this class as you build features for the app.
// */

// class SnackOrBoozeApi {

//   static async getSnacks() {
//     const result = await axios.get(`${BASE_API_URL}/snacks`);
//     console.log(result)
//     return result.data;
//   }

// }

// export default SnackOrBoozeApi;

import axios from "axios";

const BASE_API_URL = "https://spanglish-back-end.onrender.com"; // Replace with your actual Render app URL and the backend endpoint

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    console.log(result);
    return result.data;
  }
}

export default SnackOrBoozeApi;

