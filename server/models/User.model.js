const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    profileImage: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
