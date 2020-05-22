let db = require("./models");

db.sequelize.sync().then(function() {
    process.exit();
});