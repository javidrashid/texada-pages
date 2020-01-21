const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
const data = require("./dataset.json");

app.get("/data", function(req, res) {
  return res.json(data);
});

app.listen(process.env.PORT || 8080);
