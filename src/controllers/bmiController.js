// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js

const { calculateBMI, classifyBMI } = require("../models/bmi");

// Hàm getBMI để xử lý yêu cầu từ client
exports.getBMI = (req, res) => {
  const { weight, height } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Vui lòng cung cấp đầy đủ cân nặng và chiều cao." });
  }

  // Tính chỉ số BMI và phân loại
  const bmi = calculateBMI(weight, height);
  const classification = classifyBMI(bmi);

  // Trả về kết quả cho client
  res.json({
    bmi,
    classification,
  });
};