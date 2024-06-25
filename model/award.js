const mongoose = require("mongoose");

const awardSchema = mongoose.Schema(
  {
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    events: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    reward: {
      type: String,
      enum: ["GIFT PACK", "$5.00"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const awardModel = mongoose.model("Award", awardSchema);
