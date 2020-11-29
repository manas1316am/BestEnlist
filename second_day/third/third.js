var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName = navigator.appName;
var objfullVersion = "" + parseFloat(navigator.appVersion);
var objBrMajorVersion = parseInt(navigator.appVersion, 10);
var objOffsetName, objOffsetVersion, ix;
if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
  objbrowserName = "Chrome";
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
} else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
  objbrowserName = "Microsoft Internet Explorer";
  objfullVersion = objAgent.substring(objOffsetVersion + 5);
} else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
  objbrowserName = "Firefox";
} else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
  objbrowserName = "Safari";
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
  if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
    objfullVersion = objAgent.substring(objOffsetVersion + 8);
} else if (
  (objOffsetName = objAgent.lastIndexOf(" ") + 1) <
  (objOffsetVersion = objAgent.lastIndexOf("/"))
) {
  objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
  objfullVersion = objAgent.substring(objOffsetVersion + 1);
  if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
    objbrowserName = navigator.appName;
  }
}
if ((ix = objfullVersion.indexOf(";")) != -1)
  objfullVersion = objfullVersion.substring(0, ix);
if ((ix = objfullVersion.indexOf(" ")) != -1)
  objfullVersion = objfullVersion.substring(0, ix);
objBrMajorVersion = parseInt("" + objfullVersion, 10);
if (isNaN(objBrMajorVersion)) {
  objfullVersion = "" + parseFloat(navigator.appVersion);
  objBrMajorVersion = parseInt(navigator.appVersion, 10);
}
// document.write(
//   "" +
//     "Browser name = " +
//     objbrowserName +
//     "<br>" +
//     "Full version = " +
//     objfullVersion +
//     "<br>" +
//     "Major version = " +
//     objBrMajorVersion 
    
// );

alert("Browser Name: " + objbrowserName);
alert("Full version: " + objfullVersion)
alert("Major version: " + objBrMajorVersion)