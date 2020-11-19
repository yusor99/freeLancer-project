const URL = "https://freelancer-back-end.herokuapp.com/v1";

export const login = (data, callback) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const register = (data, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  fetch(`${URL}/register`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};
export const forgetPassword = (data, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  fetch(`${URL}/forgetPassword`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};

export const edit = (data, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  fetch(`${URL}/edit`, requestOptions)
    .then((response) => response.json())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};

export const getCategories = (callback) => {
  fetch(`${URL}/categories`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getServices = (id, callback) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`${URL}/services/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
