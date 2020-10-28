window.addEventListener("load", function() {
    // Get user information using 
    var result = bowser.getParser(navigator.userAgent).getResult();
    console.log(result);
   
    console.log("%cBROWSER INFO", "background-color:orange");
    console.log("%cBrowser Name: ", "color:green", result.browser.name);
    console.log("%cBrowser Version: ", "color:green", result.browser.version);
    result.brow
   
    console.log("%cOperating System Info", "background-color:orange");
    console.log("%cOperating System: ", "color:green", result.os.name);
    console.log("%cOperating System Version: ", "color:green", result.os.version);
    console.log("%cOperating System Version Name: ", "color:green", result.os.versionName);
   
    // PLATFORM
    console.log("%cPLATFORM", "background-color:orange");
    console.log("%cPlatform Type: ", "color:green", result.platform.type);
  });