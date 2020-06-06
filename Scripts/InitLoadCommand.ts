import BotClient from './Client'
import FS from 'fs'
import CommandHandler from '@components/CommandHandler'
import UsageFactory from '../Components/Plugin/UsageFactory'

export default function (client: BotClient): void {
  FS.readdir('./App/Command/', (err, categories) => {
    if (err) console.error(err)

    // Load Category first
    console.info(`Loaded ${categories.length} categories.`)
    categories.forEach(category => {
      FS.readdir(`./App/Command/${category}/`, (err, files) => {
        if (err) console.log(err)

        files.forEach(file => {
          const prettifyFile = file.split('.')[0]
          const Command = require(`../App/Command/${category}/${file}`).default
          const cmd: CommandHandler = new Command()

          // Load Command
          const cmdString = typeof cmd.options.name === 'string' ? cmd.options.name : cmd.options.name[0]
          cmd.options.usage = UsageFactory(client, cmd)
          client.commands.command.set(cmdString, cmd)

          // Load aliases
          if (typeof cmd.options.name !== 'string') {
            const cmdGroup = cmd.options.name.slice(1)
            cmdGroup.forEach(cm => {
              client.commands.caller.set(cm, cmdString)
            })
          }

          console.info(`Loaded ${category}::${prettifyFile}.`)
        })
      })
    })
  })
}
