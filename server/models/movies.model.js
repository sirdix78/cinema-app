const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    poster_path: {
      type: String,
      required: [true, "Poster path is required."],
    },
    overview: {
      type: String,
      required: [true, "Overview is required."],
    },
    release_date: {
      type: Date,
      required: [true, "Release Date is required."],
    },
    playing_now: {
      type: Boolean,
      default: false,
    },
    top_rated: {
      type: Boolean,
      default: false,
    },
    upcoming: {
      type: Boolean,
      default: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movies = model("Movies", movieSchema);

module.exports = Movies;
