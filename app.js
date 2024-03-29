const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { ErrorResponseObject } = require("./common/http");
const routes = require("./routes");

const PORT = 3200;
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use("/", routes);

app.use(express.static(__dirname + "/assets"));

app.all("*", (req, res) =>
  res.status(404).json(new ErrorResponseObject("Route not defined"))
);
app.listen(process.env.PORT || PORT, () => {
  console.log(`Available on: http://localhost:${PORT}`);
});

module.exports = app;
