const { By, Key, until } = require("selenium-webdriver");
const driver = require("../support/driver");
var { Given } = require("cucumber");

Given(/^I go to google$/, async () => {
  await driver.get("http://www.google.com/ncr");
  await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
  await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
});

Given(/^I go to facebook$/, async () => {
  await driver.get("http://www.facebook.com");
});
