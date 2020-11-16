const Record = require("../models/Record");

// @desc    Get all records
// @route   GET /api/records
// @access  Public
exports.getRecords = async (req, res, next) => {
  try {
    const records = await Record.find();

    return res.status(200).json({
      success: true,
      count: records.length,
      data: records,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add record
// @route   POST /api/records
// @access  Public
exports.addRecord = async (req, res, next) => {
  try {
    const record = await Record.create(req.body);

    return res.status(201).json({
      success: true,
      data: record,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Delete record
// @route   POST /api/records/:id
// @access  Public
exports.deleteRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await record.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
