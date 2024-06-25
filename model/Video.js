const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoPath: {
    type: String,
    required: true,
  },
  compressedVideoPath: {
    type: String,
    required: true,
  },
  isarchive: {
    type: Boolean,
    default: false,
  },
  isdelete: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    min: 0,
    default: 0,
  },
  dislikes: {
    type: Number,
    min: 0,
    default: 0,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  thumbnail: {
    type: String,
    required: true,
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
});
