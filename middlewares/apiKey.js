function apiKey(req, res, next) {
  const api_key = "123456789";

  console.log(req.query.api_key);
  const userApiKey = req.query.api_key;

  if (userApiKey && (userApiKey === api_key)) {
    next();
  } else {
    res.json({ message: "not allowed🤦‍♂️" });
  }
}

module.exports = apiKey;
