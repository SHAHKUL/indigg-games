const express = require("express");
const {
  getOneData,
  getAllData,
  createData,
  updateData,
  deleteData,
} = require("../controller/teamController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.use(requireAuth);
router.get("/", getAllData).post("/", createData);

router
  .get("/:id", getOneData)
  .put("/:id", updateData)
  .delete("/:id", deleteData);

module.exports = router;
