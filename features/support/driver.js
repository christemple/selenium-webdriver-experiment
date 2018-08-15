require("chromedriver");
var Webdriver = require("selenium-webdriver");
const { setDefaultTimeout } = require("cucumber");

const username = process.env.SAUCELABS_USER;
const accessKey = process.env.SAUCELABS_ACCESS_KEY;

let driver;

if (username && accessKey) {
  setDefaultTimeout(60 * 1000);

  driver = new Webdriver.Builder()
    .withCapabilities({
      browserName: "internet explorer",
      platform: "Windows 7",
      version: "11.0",
      username,
      accessKey
    })
    .usingServer(
      `http://${username}:${accessKey}@ondemand.saucelabs.com:80/wd/hub`
    )
    .build();
} else {
  setDefaultTimeout(10 * 1000);
  driver = new Webdriver.Builder().forBrowser("chrome").build();
}

module.exports = driver;
