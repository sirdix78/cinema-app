const router = require("express").Router();
const Movies = require("../models/movies.model");

router.get("/all-movies", (req, res) => {
  Movies.find()
    .then((allMovies) => {
      res.json(allMovies);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/playing_now", (req, res) => {
  Movies.find({ playing_now: true })
    .then((playing_now) => {
      res.json(playing_now);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/top_rated", (req, res) => {
  Movies.find({ top_rated: true })
    .then((top_rated) => {
      res.json(top_rated);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/upcoming", (req, res) => {
  Movies.find({ upcoming: true })
    .then((upcoming) => {
      res.json(upcoming);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post("/create", async (req, res) => {
  Movies.create(req.body)
    .then((responseFromDB) => {
      console.log("Movie created!", responseFromDB);
      res.status(201).json(responseFromDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Trouble creating your movie" });
    });
});

router.patch("/update/:movieId", (req, res) => {
  Movies.findByIdAndUpdate(req.params.movieId, req.body, {
    new: true,
  })
    .then((updatedMovie) => {
      console.log("Movie updated!", updatedMovie);
      res.status(200).json(updatedMovie);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Trouble updating your movie" });
    });
});

router.delete("/delete/:movieId", async (req, res) => {
  const { movieId } = req.params;
  try {
    const deletedMovie = await Movies.findByIdAndDelete(movieId);
    console.log("movie deleted", deletedMovie);
    res.status(204).json({ message: "movie deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "Trouble deleting the movie" });
  }
});

module.exports = router;
