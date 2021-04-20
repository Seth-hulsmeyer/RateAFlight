const express = require("express");
// const session = require("express-session");
// const path = require("path");
// const passport = require("passport");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku) d
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
require("./routes/api-routes")(app);
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Listening on port" + PORT);
  });
});
app.listen(PORT, () => {
  console.log(`:earth_americas: ==> API server now on port ${PORT}!`);
});
