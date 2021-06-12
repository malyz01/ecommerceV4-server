const chalk = require('chalk');

module.exports = {
  logErr: (data) => console.log(chalk.red(data)),
  logServer: (data) => console.log(chalk.yellowBright(data))
};
