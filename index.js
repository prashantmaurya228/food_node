const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

const ItemRoutes = require("./routes/ItemRoutes");
app.use(bodyParser.json()); //req.body

app.get("/", function (req, res) {
  res.send("Hello World !2222!");
});

app.use("/food", ItemRoutes);

app.listen(4000, () => {
  console.log("server is up and running");
});
