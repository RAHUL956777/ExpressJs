const router = require("express").Router();

router.get("/products", (req, res) => {
  res.render(`products`, {
    title: " my product Page!",
  });
});

module.exports = router;
