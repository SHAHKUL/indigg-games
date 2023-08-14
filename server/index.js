require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Tournamentroutes = require("./route/tournamentRoute");
const Teamroute = require("./route/teamroute");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/tournament", Tournamentroutes);
app.use("/api/team", Teamroute);

mongoose
  .connect(process.env.mongo_URL)
  .then(() => {
    app.listen(process.env.Port, () => {
      console.log("server conneted", process.env.mongo_URL);
    });
  })
  .catch((err) => {
    console.log(err);
  });
