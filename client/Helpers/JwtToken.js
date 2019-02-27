module.exports = {
  setToken: access_token => localStorage.setItem("access_token", access_token),
  getToken: () => localStorage.getItem("access_token"),
  removeToken: () => localStorage.removeItem("access_token")
};
