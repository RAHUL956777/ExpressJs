const { Router } = require("express");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render(`index`, {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render(`about`, {
    title: " About",
  });
});

router.get("/download", (req, res) => {
  let a = res.download(path.resolve(__dirname) + "about.html");
  // console.log(a);
});

module.exports = router;
