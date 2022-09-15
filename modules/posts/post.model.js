const { Schema, model } = require("mongoose");
const { stringify } = require('querystring')

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [3, "Minimum length for body must be three characters "],
    },
    body: {
      type: String,
      required: true,
      minLength: [10, "Minimum length for body must be three characters "],
    },
    published: {
      type: Boolean,
      default: false,
     
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
  },
  { timestamps: true }
);

module.exports = model("Products", postSchema);
