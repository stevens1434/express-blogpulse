'use strict';
module.exports = function(sequelize, DataTypes) {
  var author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.author.hasMany(models.post);
        models.author.hasMany(models.comment); //or is this belongsTo?
      }
    },
    instanceMethods: {
      getFullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });
  return author;
};
