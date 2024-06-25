const ValidationError = (res, err) => {
  const errorMessage = Object.values(err.errors).map((error) => error.message);
  return res.status(400).json({
    message: errorMessage,
    status: 400,
  });
};

const duplicateError = (res, err) => {
  const field = Object.keys(err.keyValue)[0];
  return res.status(409).json({
    message: `${field} already Exists`,
    status: 409,
  });
};

const internalServerError = (res, err) => {
  return res.status(500).json({
    message: "Something Went Wrong",
    status: 500,
  });
};
module.exports = {
  ValidationError,
  duplicateError,
  internalServerError,
};
