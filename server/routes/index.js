const user = require("./user");
const auth = require("./auth");
const work = require("./work");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/work", work);
  app.use(error);
};
