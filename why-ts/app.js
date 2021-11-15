// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typeof {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typeof {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.cit;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.addres.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
