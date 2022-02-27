const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const RyuuLog = (text, color) => {
	return !color ? chalk.cyan('[NECTT] ') + chalk.yellow(text) : chalk.cyan('[NECTT] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  RyuuLog
}
