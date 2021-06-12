'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.profile);
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          const hashPassword = await bcrypt.hash(user.password, 10);
          user.password = hashPassword;
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const hashPassword = await bcrypt.hash(user.password, 10);
            user.password = hashPassword;
          }
        }
      },
      sequelize,
      modelName: 'user' // TODO capitalize and also set it in controller
    }
  );

  User.prototype.isValidPassword = async function (input) {
    try {
      const isMatch = await bcrypt.compare(input, this.dataValues.password);
      return isMatch;
    } catch (err) {
      console.log(err.message);
    }
  };

  return User;
};
