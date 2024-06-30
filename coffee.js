var masterDiv = document.querySelector("*");
var searchIcon = document.querySelector("#search-icon");
var searchBox = document.querySelector(".search-box");
var cartIcon = document.querySelector("#cart-icon");
var cartBox = document.querySelector(".add-to-cart");

var addToCartBtn = document.querySelector(".cart-btn");
var cartBtn = document.getElementsByClassName(".add-to-cart-btn");

var loginIcon = document.querySelector("#login-icon");
var loginForm = document.querySelector(".login-section");
var loginBox = document.querySelector(".login-box");
var signupBox = document.querySelector(".signup-box");
var loginCancel = document.querySelector("#login-cancel");
var siginupCancel = document.querySelector("#siginup-cancel");
var createAccount = document.querySelector("#create-acc");
var siginupHere = document.querySelector("#siginup-here");

var loginBtn = document.querySelector("#login-btn");
var signupBtn = document.querySelector("#signup-btn");
var loggedIn = document.querySelector(".loggedin");
var check = 0;

const display = () => {
  if (displayProp == 0) {
    signupBox.style.display = "block";
  }
};

searchIcon.addEventListener("click", function () {
  if (check == 0) {
    searchBox.style.transform = "scaleY(1)";
    check = 1;
  } else {
    searchBox.style.transform = "scaleY(0)";
    check = 0;
  }
});

var cartTgl = 0;
cartIcon.addEventListener("click", () => {
  if (cartTgl == 0) {
    cartIcon.style.color = "yellow";
    cartBox.style.width="30vw"

    cartTgl = 1;
  } else {
    cartIcon.style.color = "#fff";
    cartBox.style.width="0"
    cartTgl = 0;
  }
});


loginIcon.addEventListener("click", function () {
  loginForm.style.transform = "scale(1)";
  loginBox.style.transform = "scale(1)";
  masterDiv.style.overflow = "hidden";
});

loginCancel.addEventListener("click", function () {
  masterDiv.style.overflow = "scroll";
  loginForm.style.transform = "scale(0)";
  signupBox.style.display = "none";
});

siginupCancel.addEventListener("click", function () {
  masterDiv.style.overflow = "scroll";
  loginForm.style.transform = "scale(0)";
  setTimeout(() => {
    signupBox.style.display = "none";
  }, 1000);
});

siginupHere.addEventListener("click", function () {
  signupBox.style.transform = "scale(0)";
  loginBox.style.transform = "scale(1)";
});

createAccount.addEventListener("click", function () {
  setTimeout(() => {
    signupBox.style.display = "block";
  }, 400);
  signupBox.style.transform = "scale(1)";
  loginBox.style.transform = "scale(0)";
});

loginBtn.addEventListener("click", () => {
  loggedIn.style.scale = "1";
  setTimeout(() => {
    loggedIn.style.scale = "0";
    setTimeout(() => {
      masterDiv.style.overflow = "scroll";
      loginForm.style.transform = "scale(0)";
      signupBox.style.display = "none";
    }, 100);
  }, 2000);
});

signupBtn.addEventListener("click", () => {
  document.querySelector(".para1-loggedin").innerHTML =
    "login <span>successful</span>";
  loggedIn.style.scale = "1";
  setTimeout(() => {
    loggedIn.style.scale = "0";
    setTimeout(() => {
      masterDiv.style.overflow = "scroll";
      loginForm.style.transform = "scale(0)";
      signupBox.style.display = "none";
    }, 100);
  }, 2000);
});
