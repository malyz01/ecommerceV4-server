const bcrypt = require('bcrypt');
const { sequelize, Sequelize } = require('../index');

const User = sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    role: {
      type: Sequelize.ENUM,
      values: ['admin', 'basic']
    },
    status: {
      type: Sequelize.ENUM,
      values: ['active', 'inactive']
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
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
    instanceMethods: {
      isValidPassword: async function (password) {
        try {
          const isMatch = await bcrypt.compare(password, this.password);
          return isMatch;
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  }
);

module.exports = User;
