/** function to validates input of username and password
 * Returns true if input is validated
 * @param {string} username
 * @param {string} password
 */

// VARIABLES : Authenticated user
var adminUsername = "louiseabrena";
var adminPassword = "sugarRushride";

// VARIABLES: NOT users
var invalidUser = "Invalid Username or Password!";
var noUsername = "No username entered";
var noPassword = "No password entered";

// VARIABLES: username and password from the md5Encrypt function to pass on as string
// var md5Username = md5Encrypt(adminUsername);
// var md5Password = md5Encrypt(adminPassword);

//VARIABLES: encrypted username and passwords
// var aunthenticUsername = md5Encrypt(username);
// var aunthenticPassword = md5Encrypt(password);

function checkLogin(username, password) {
  "use strict";
  // validation for aunthentic users
  if (
    username === adminUsername &&
    md5Encrypt(password) === md5Encrypt(adminPassword)
  ) {
    return true;
    // validation for no value in username
  } else if (username === "") {
    return noUsername;
    // validation for no value in password
  } else if (password === "") {
    return noPassword;
    // validation to value that are incorrect (in short validation to non authentic user)
  } else {
    return invalidUser;
  }
}
