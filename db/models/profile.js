const { v4: uuid } = require('uuid');
const db = require('../index');
const User = require('./User');

const Profile = db.sequelize.define(
  'Profile',
  {
    id: {
      type: db.Sequelize.UUID,
      defaultValue: function () {
        return uuid();
      },
      primaryKey: true
    },
    userId: {
      type: db.Sequelize.UUID,
      references: {
        model: User,
        key: 'id',
        deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    firstName: db.Sequelize.STRING,
    lastName: db.Sequelize.STRING,
    avatar: {
      type: db.Sequelize.STRING,
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
