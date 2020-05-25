import BotClient from './Client'
import FS from 'fs'

export function EventHandler (client: BotClient): void {
  FS.readdir('./Components/Event/', (err, files) => {
    if (err) console.error(err)

    files.forEach(file => {
      const fl = require(`@components/Event/${file}`).default
      const ev = new (fl)(client) // eslint-disable-line
      ev.init()
    })
  })
}
