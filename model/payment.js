const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["STRIPE"],
      required: true,
    },
    award: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Award",
      required: true,
    },
    amount: { type, Number, required: true, min: 0 },
    transactionId: { type: String, required: true },
    status: { type: String, enum: ["PENDING", "COMPLETED"] },
    paymentMethod: {
      type: String,
      enum: ["PAYPAL", "STRIPE"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
