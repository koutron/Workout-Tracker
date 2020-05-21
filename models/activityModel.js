module.exports = function(sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        duration: DataTypes.STRING,
        weight: DataTypes.STRING,
        reps: DataTypes.STRING,
        sets: DataTypes.STRING,
        distance: DataTypes.STRING
    });
  
    Activity.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Activity.belongsTo(models.Workout, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Activity;
  };