import axios from "axios";
const API_URL = "http://localhost:8000/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login/", { email, password }, { withCredentials: true })
      .then((response) => {
        if (response.data.userAccessToken) {
          sessionStorage.setItem(
            "userAcessToken",
            JSON.stringify(response.data.userAccessToken)
          );
        }
        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem("userAccessToken");
  }

  register(email, password) {
    return axios.post(API_URL + "register/", {
      email,
      password,
    });
  }
}

export default new AuthService();
