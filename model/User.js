const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please provide FirstName"],
    },
    lastName: {
      type: String,
      required: [true, "please provide LastName"],
    },
    userName: {
      type: String,
      unique: true,
      required: [true, "please provide UserName"],
    },
    image: {
      type: String,
      required: [true, "please Provide Image"],
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE"],
      required: [true, "please Provide your gender"],
    },
    dateOfBirth: {
      type: Date,
      default: Date.now,
      required: [true, "please Provide Your Birthday"],
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: (props) => `${props.value} is not a valid Number`,
      },
      required: [true, "User Phone number required"],
    },
    address: {
      type: String,
      required: [true, "please Provide Your Address"],
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid Email`,
      },
      required: [true, "Pleases provide Correct Email"],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "please Enter Your Password"],
      minlength: 8,
    },
    facebook: { type: Object },
    instagram: { type: Object },
    tiktok: { type: Object },
    youtube: { type: Object },
    awards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Award",
      },
    ],
    stripeId: { type: String },
    stripeAccountId: { type: String },
  },

  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
