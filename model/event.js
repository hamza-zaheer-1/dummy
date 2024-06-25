const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    createdOn: {
      type: Date,
      default: Date.now,
      required: true,
    },
    status: {
      type: String,
      enum: ["EXPIRED", "ACTIVE", "COMING_SOON"],
      required: true,
    },
    endingOn: {
      type: Date,
      required: true,
    },
    winnerVideo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
