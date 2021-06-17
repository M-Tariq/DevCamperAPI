// @des         Get all bootcamps
// @route       Get /api/v1/bootcamps
// @access      Public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Get all bootcamps",
    method: req.method,
  });
};

// @des         Get single bootcamps
// @route       Get /api/v1/bootcamps/:id
// @access      Public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Get single bootcamp",
    method: req.method,
  });
};

// @des         Create new bootcamp
// @route       POST /api/v1/bootcamp
// @access      Private
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Create new bootcamp",
    method: req.method,
  });
};

// @des         Update bootcamp
// @route       PUT /api/v1/bootcamp/:id
// @access      Private
exports.updateBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Update bootcamp",
    method: req.method,
  });
};

// @des         Delete bootcamp
// @route       Get /api/v1/bootcamp/:id
// @access      Private
exports.deleteBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Delete bootcamp",
    method: req.method,
    
  });
};
