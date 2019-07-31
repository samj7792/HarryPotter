module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define(
    "Story",
    {
      playerName: DataTypes.STRING,
      house: DataTypes.STRING,
      characterMatch: DataTypes.STRING,
      class: DataTypes.STRING
    },
    { freezeTableName: true }
  );
  return Story;
};
