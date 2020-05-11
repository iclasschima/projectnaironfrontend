import axios from "axios";

export const userService = {
  // login,
  logout,
  register,
  // getAll,
  // getById,
  // update,
  // delete: _delete,
};

function logout() {
  localStorage.removeItem("user");
}

function register(user) {
  return axios
    .post("http://localhost:9090/nairon/api/user/create", user)
    .then(handleResponse)
    .then((data) => localStorage.setItem("email", user.email));
}

function handleResponse(response, history) {
  // return response.text().then((text) => {
  const data = response.data;
  if (response.status > 201 && response.status < 200) {
    if (response.status === 401) {
      //auto logout if 401 response returned from api
      logout();
      history.push("/");
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
