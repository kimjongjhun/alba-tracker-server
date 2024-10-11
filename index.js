const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const clientsRouter = require("./src/routes/clients");
const jobsRouter = require("./src/routes/jobs");
const locationsRouter = require("./src/routes/locations");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/clients", clientsRouter);
app.use("/jobs", jobsRouter);
app.use("/locations", locationsRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
