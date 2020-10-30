//Global variables
var allInfo = {};

//Function to get the user software and hardware information.
function userInfo() {

  //Get user information using the libary Bowser.
  var result = bowser.getParser(navigator.userAgent).getResult();

  //Assign the user information to the object.
  Object.assign(allInfo, {
    browserName: result.browser.name,
    browserVersion: result.browser.version,
    osName: result.os.name,
    osVersion: result.os.version,
    osVersionName: result.os.versionName,
    platformType: result.platform.type
  });
}

//Make the function appliable every time you change zoom.
window.onresize = userFontSize;

//Function to get the users font size.
function userFontSize() {

  //Get zoom level in the users browser.
  var zoom = detectZoom.device();

  //Get fixed font-size.
  var para = document.querySelector('p');
  var compStyles = window.getComputedStyle(para);
  var fontSizeString = compStyles.getPropertyValue('font-size');
  var fontSize = parseInt(fontSizeString, 10);

  //Calculate font-size depending on zoom level.
  var calcFontSize = zoom * fontSize;

  //Assign the font size to the object.
  Object.assign(allInfo, { fontSize: calcFontSize });
}

//Function to save a screenshot.
function screenShot() {
  var canvasScreenshot = html2canvas(document.querySelector("body"));

  //Assign the canvas to the object.
  Object.assign(allInfo, { screenshot: canvasScreenshot });
}

//Function to get the URL.
function getUrl() {
  var URL = location.href;

  //Assign the font size to the object.
  Object.assign(allInfo, { url: URL });
}

// Function to create the cookie 
function createCookie(name, value, days) {
  var expires;

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }

  document.cookie = escape(name) + "=" +
    escape(value) + expires + "; path=/";
}

function send() {
  userInfo();
  userFontSize();
  screenShot();
  getUrl();
  $('.green-box').removeClass("d-none");
  fetch('http://localhost:3000/feedback', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(allInfo)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.message);
  });
}