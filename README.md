# Workout-Tracker
A workout tracking app that uses MySQL along with Sequalize and Node.js/Express.

## Description
This application is used to keep track of workouts and the activities/exercises associated with each workout.  Once a workout is created, users fill in information about their activity including exercise type, duration, weight, reps, sets, and distance.  Multiple activities/exercises can be associated with a single workout.

## Installation
This application's dependencies include express, mysql2, and sequelize.  Run "npm install" to install these dependencies.  

## Usage
Prior to running the application, a SQL table must be created with the name "sequelize_fitness".  After the table is created, run "npm run deploy" to seed the database with exercise data and start the node server.  Navigate to http://localhost:5000 to start the application. 
