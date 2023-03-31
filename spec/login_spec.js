// console.log("Louise Abrena");
// Authentic User: louiseabrena
// Authentic Password: sugarRushride

var invalidUser = "Invalid Username or Password!";
var noUsername = "No username entered";
var noPassword = "No password entered";

// JASMINE TESTING FOR AUTHENTIC USERS
// should return a boolen true if username and password is equals to the authenticated users and passwords
describe("checkLogin function FOR VALID USER", function () {
  it("should return the Boolean true if the username and password match a known username and matching password (username: louiseabrena, password: sugarRushride)", function () {
    let adminUsername = "louiseabrena";
    let adminPassword = "sugarRushride";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(true);
  });
});

describe("checkLogin function for INVALID USERS", function () {
  it("should return 'Invalid Username or Password.' if the username input does not match a known username (username: anhance)", function () {
    let adminUsername = "anhance";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(invalidUser);
  });
  it("should return 'Invalid Username or Password.' if the password input does not match a known password (password: farewell)", function () {
    let adminPassword = "farewell";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(invalidUser);
  });
  it("should return 'Invalid Username or Password.' if a valid username is input with an invalid password (username: louiseabrena, password: tinnitus)", function () {
    let adminUsername = "louiseabrena";
    let adminPassword = "tinnitus";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(invalidUser);
  });
  it("should return 'Invalid Username or Password.' if an invalid username is input with a valid password (username: louise, password: sugarRushride)", function () {
    let adminUsername = "louise";
    let adminPassword = "sugarRushride";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(invalidUser);
  });
  it("should return 'No username entered.' if the username is an empty string. (username:     )", function () {
    let adminUsername = "";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(noUsername);
  });
  it("should return 'No password entered.' if the password is an empty string. (password:     )", function () {
    let adminPassword = "";
    expect(checkLogin(adminUsername, adminPassword)).toEqual(noPassword);
  });
});

// JASMINE TESTING FOR MD5ENCRYPT FUNCTION
// should return a string of the hashed value (as 32 hexadecimal characters).
describe("md5Encrypt function FOR PASSWORD ENCRYPTION", function () {
  it("should return a string of the hashed value (as 32 hexadecimal characters). (password: happyFools, password encrypt: /^[a-f0-9]{32}$/)", function () {
    let pWord = "happyFools";
    let pwEncrypt = /^[a-f0-9]{32}$/;
    expect(md5Encrypt(pWord)).toMatch(pwEncrypt);
  });
});
