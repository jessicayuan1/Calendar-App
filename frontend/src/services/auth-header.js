export default function authHeader() {
  // replace localStorage with react cookie
  const userAcessToken = JSON.parse(sessionStorage.getItem("userAcessToken"));

  if (userAcessToken) {
    return { Authorization: "Bearer " + userAcessToken };
  } else {
    return {};
  }
}
