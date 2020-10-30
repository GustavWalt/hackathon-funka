//Function to get the user software and hardware information.
function userInfo() {

  //Get user information using the libary Bowser.
  var result = bowser.getParser(navigator.userAgent).getResult();

  //Create a object to store all the user information.
  var userInfo = {
    browserName: result.browser.name,
    browserVersion: result.browser.version,
    osName: result.os.name,
    osVersion: result.os.version,
    osVersionName: result.os.versionName,
    platformType: result.platform.type
  };

  //Log the object
  console.log(userInfo);
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

  //Calculate font-size depending on zoom level and log it.
  var calcFontSize = zoom * fontSize;

  //Log the calculated font size.
  console.log(calcFontSize);
}

//Function to save a screenshot.
function screenShot() {
  html2canvas(document.querySelector("body"));
}

//Function to get the URL.
function getUrl() {
  var URL = location.href;
  console.log(URL);
}

//Run all the methods.
userInfo();
userFontSize();
screenShot();
getUrl();