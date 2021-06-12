const { v4: uuid } = require('uuid');
const { sequelize, Sequelize } = require('../index');
const User = require('./User');

const Profile = sequelize.define(
  'Profile',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: function () {
        return uuid();
      },
      primaryKey: true
    },
    userId: {
      type: Sequelize.UUID,
      references: {
        model: User,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    avatar: {
      type: Sequelize.STRING,
      defaultValue:
        'https://cdn2.iconfinder.com/data/icons/web-mobile-2-1/64/user_avatar_admin_web_mobile_business_office-512.png'
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Profile;
