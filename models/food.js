module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    price: {
      //In pence
      type: DataTypes.INTEGER,
      defaultValue: 100
    }
  });

  return Food;
}
