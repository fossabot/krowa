// imports
const chalk = require('chalk')
const figlet = require('figlet')

// text
figlet('krowa', async function (err, text) {
  if (err) {
    console.error(`${chalk.yellow(chalk.bold('krowa error:'))} ${chalk.red(`postinstall file error - figlet error: ${err}`)}`)
    return
  }
  await console.log(chalk.yellow(text + '\n'))
  console.log('krowa has been installed! 🎉')
  console.log('📗 read our docs at: ' + chalk.blue('https://krowa.js.org/'))
  console.log('📞 for support, join our discord: ' + chalk.blue('https://discord.gg/-'))
  console.log('🐱 find a bug? want to request a feature? visit our github: ' + chalk.blue('https://github.com/colenh/krowa'))
  console.log(chalk.redBright('❗ please be aware, we can\'t include every api here, some are malicious, etc. we are always trying to include new apis.'))
})
