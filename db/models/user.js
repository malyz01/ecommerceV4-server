const bcrypt = require('bcrypt');
const db = require('../index');

const User = db.sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: db.Sequelize.UUID,
      defaultValue: db.Sequelize.UUIDV4
    },
    email: db.Sequelize.STRING,
    password: db.Sequelize.STRING,
    role: {
      type: db.Sequelize.ENUM,
      values: ['admin', 'basic']
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
