const express = require("express");
const {
  getOneData,
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../controller/tournamentcontrol.js");

const router = express.Router();

router.get("/", getAllData).post("/", createData);

router
  .get("/:id", getOneData)
  .put("/:id", updateData)
  .delete("/:id", deleteData);

module.exports = router;
