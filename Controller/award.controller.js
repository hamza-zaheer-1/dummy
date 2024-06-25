const Awrd = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .send({ message: "Please provide all the required fields" });
    } else {
      const {
        firstName,
        lastName,
        userName,
        image,
        gender,
        dateOfBirth,
        phoneNumber,
        address,
        email,
        password,
      } = req.body;
      const user = new userModel({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        image: image,
        gender: gender,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        password: password,
      });
      const result = await user.save();
      return res
        .status(201)
        .send({ message: "User created successfully", result });
    }
  } catch (err) {
    if (err.name === "ValidationError") {
      return ValidationError(res, err);
    }
    if (err.name === "MongoServerError") {
      return duplicateError(res, err);
    } else {
      return internalServerError(res, err);
    }
  }
};
