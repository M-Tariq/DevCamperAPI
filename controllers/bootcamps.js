const Bootcamp = require("../models/Bootcamp");
const _ = require("lodash");
// @des         Get all bootcamps
// @route       Get /api/v1/bootcamps
// @access      Public
exports.getBootCamps = async (req, res, next) => {
  let bootcamps = new Array(Bootcamp);
  try {
    let bootcamps = await Bootcamp.find();
    if (!bootcamps) {
      return res.status(200).json({
        success: false,
        message: "No bootcamp found",
        method: req.method,
        data: bootcamp,
      });
    }
    res.status(200).json({
      success: true,
      message: "Got all bootcamps",
      count: bootcamps.length,
      method: req.method,
      bootcamps: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      method: req.method,
      error: error.message,
    });
  }
};

// @des         Get single bootcamp
// @route       Get /api/v1/bootcamps/:id
// @access      Public
exports.getBootCamp = async (req, res, next) => {
  let bootcampId = req.params.id;
  try {
    bootcamp = await Bootcamp.findById(bootcampId);
    if (!bootcamp) {
      return res.status(200).json({
        success: false,
        message: "No bootcamp found",
        method: req.method,
        data: bootcamp,
      });
    }
    res.status(200).json({
      success: true,
      message: "Got bootcamp",
      method: req.method,
      bootcamps: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      method: req.method,
      error: error.message,
    });
  }
};

// @des         Create new bootcamp
// @route       POST /api/v1/bootcamp
// @access      Private
exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      success: true,
      message: "Create new bootcamp",
      method: req.method,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      method: req.method,
      error: error.message,
    });
  }
};

// @des         Update bootcamp
// @route       PUT /api/v1/bootcamp/:id
// @access      Private
exports.updateBootCamp = async (req, res, next) => {
  try {
    let bootcampId = req.params.id;
    let data = req.body;
    const bootcamp = await Bootcamp.findOneAndUpdate(
      { _id: bootcampId },
      data,
      { new: true }
    );
    if (!bootcamp) {
      return res.status(200).json({
        success: false,
        message: "No bootcamp found",
        method: req.method,
        data: bootcamp,
      });
    }
    res.status(200).json({
      success: true,
      message: "Suucesfully updated bootcamp",
      method: req.method,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      method: req.method,
      error: error.message,
    });
  }
};

// @des         Delete bootcamp
// @route       Get /api/v1/bootcamp/:id
// @access      Private
exports.deleteBootCamp = async (req, res, next) => {
  try {
    let bootcampId = req.params.id;
    const bootcamp = await Bootcamp.findByIdAndDelete({ _id: bootcampId });
    if (!bootcamp) {
      return res.status(200).json({
        success: false,
        message: "No bootcamp found",
        method: req.method,
        data: bootcamp,
      });
    }
    res.status(200).json({
      success: true,
      message: "Suucesfully deleted bootcamp",
      method: req.method,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      method: req.method,
      error: error.message,
    });
  }
};
