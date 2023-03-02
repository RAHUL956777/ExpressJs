const express = require("express");
const path = require("path");

const app = express();

const port = process.env.port || 3000;
// to change the ports value we use port = portnumber node filename(ex--server.js);

// ejs--it is a template engine used in web development to dynamically generate HTML markup from data provided by a server. The data may come from a database, file system, or some other source.

app.set("view engine", "ejs");
// console.log(app.get("view engine"));
console.log(app.get("views"));

// if we wnat to change  ejs's file name viwes to templtes the we need to set the name..example bellow

// app.set("viwes", path.resolve(__dirname) + "/templates");
// console.log(app.get("viwes"));

// use middleware in express
app.use(express.static("public"));

// Setting up route file
app.get("/", (req, res) => {
  res.render(`index`, {
    title: "My Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render(`about`, {
    title: " About",
  });
});

app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
