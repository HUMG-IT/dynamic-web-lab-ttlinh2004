const { addName, getNames } = require("../models/names");

// Hàm submitName để xử lý yêu cầu thêm tên mới
exports.submitName = (req, res) => {
  const { name } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name) {
    return res.status(400).json({ error: "Vui lòng cung cấp tên." });
  }

  // Thêm tên vào danh sách
  addName(name);

  // Lấy danh sách tên hiện có và trả về cho client
  const namesList = getNames();
  res.json({
    message: `Chào ${name}!`,
    names: namesList,
  });
};