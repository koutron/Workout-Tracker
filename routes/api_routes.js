const express = require('express');
let db = require("../models");
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //
router.get("/exercise", function (req, res) {
    db.Exercise.findAll({}).then(function (results) {
        res.json(results);
    });
});

router.post("/workout", function (req, res) {
    db.Workout.create(req.body).then(function (results) {
        res.json(results);
    });
});

router.get("/workout", function(req, res){
    db.Workout.findAll({}).then(function(results){
      res.json(results);
    });
  });

  router.post("/activity", function(req, res){
    db.Activity.create({
      duration: req.body.duration,
      weight: req.body.weight,
      reps: req.body.reps,
      sets: req.body.sets,
      distance: req.body.distance,
      WorkoutId: req.query.workoutId,
      ExerciseId: req.body.ExerciseId
    }).then(function(results){
      res.json(results);
    });
  });

  router.get("/getActivities/:workoutId", function(req, res){
    //Return all activities associated with a workout
    db.Workout.findOne({
        where: {
          id: req.params.workoutId
        },
        //Inner JOIN on both Activity and Exercise
        include: [
            {
                model: db.Activity,
                required: true,
                include: [{model: db.Exercise, required: true}]
            }
        ]
      }).then(function(data) {
        res.json(data);
      });
  });

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseCntrl.getAll);

// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

