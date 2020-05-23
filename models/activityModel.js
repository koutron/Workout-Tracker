module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        duration: DataTypes.STRING,
        weight: DataTypes.STRING,
        reps: DataTypes.STRING,
        sets: DataTypes.STRING,
        distance: DataTypes.STRING
    });
  
    Activity.associate = function(models) {
      Activity.belongsTo(models.Exercise);
    };
  
    return Activity;
  };