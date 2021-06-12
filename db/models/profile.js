'use strict';
const { v4: uuid } = require('uuid');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.user);
    }
  }

  Profile.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: function () {
          return uuid();
        },
        primaryKey: true
      },
      userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      avatar: {
        type: DataTypes.STRING,
        defaultValue:
          'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'profile'
    }
  );
  return Profile;
};
