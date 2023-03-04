const { Router } = require("express");
const apiKey = require("../middlewares/apiKey");
const apiKeyMiddleware = require('../middlewares/apiKey')
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
  res.download(path.resolve(__dirname) + "about.html");
  // console.log(a);
});

router.get("/api/products", apiKeyMiddleware,(req, res) => {
  res.json([
    {
      id: '123',
      name:'chrome',
    },
    {
      id: '12345',
      name:'firefox',
    }
  ])
  // console.log(a);
});



module.exports = router;
