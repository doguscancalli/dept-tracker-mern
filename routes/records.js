const express = require("express");
const router = express.Router();

const RecordsController = require("../controllers/records");

router
  .route("/")
  .get(RecordsController.getRecords)
  .post(RecordsController.addRecord);

router.route("/:id").delete(RecordsController.deleteRecord);

module.exports = router;
