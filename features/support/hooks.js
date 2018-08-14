var { AfterAll } = require("cucumber");
const driver = require("./driver");

AfterAll(() => {
  driver.quit();
});
