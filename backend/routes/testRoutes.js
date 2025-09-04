const express = require("express");
const router = express.Router();
const { upload } = require("../utils/multerUtil");

router.get("/", upload.none(), (req, res) => {
  console.log("A request hit");
  res.status(200).json({ message: "Backend is connected successfully" });
});

module.exports = router;
