import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/stopwatches/";

class UserService {
  getStopWatchList() {
    return axios.get(API_URL);
  }

  getStopWatchDetail() {
    return axios.get(API_URL + "1", { headers: authHeader() });
  }
}

export default new UserService();
