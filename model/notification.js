const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "CHALLENGE_EXPIRED",
        "CHALLENGE_START",
        "NEW_EVENT",
        "NEW_CHALLENGE",
        "NEW_COMMENT",
        "NEW_LIKE",
        "DISLIKE",
        "USER_FRIEND",
        "CHALLENGE-WINNER",
      ],
      required: true,
    },
    recipientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    readAt: {
      type: Date,
    },
  },
  {
    timeStamps: true,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
