// routes/api.js

const express = require("express");
const router = express.Router();
const { submitName } = require("../controllers/nameController");
const { getBMI } = require("../controllers/bmiController"); // Chỉ thêm nếu bạn có bmiController.js

// Route cho endpoint /submit
router.post("/submit", submitName);

// Route cho endpoint /bmi (nếu đã tạo hàm getBMI trong bmiController.js)
router.post("/bmi", getBMI);

module.exports = router;