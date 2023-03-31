// VARIABLES
window.onload = function () {
  var loginForm = document.forms.userAuthentic__form;
  var username = loginForm.userAuthentic__username;
  var password = loginForm.userAuthentic__password;
  var result = document.getElementById("output");

  loginForm.onsubmit = submitLogin;

  // validation between right or wrong password and username
  function submitLogin() {
    var checkResult = checkLogin(username.value, password.value);
    if (checkResult === true) {
      result.innerHTML = "Welcome back!";
    } else {
      result.innerHTML = checkResult;
    }
    result.style.display = "block";
    return false;
  }
};
