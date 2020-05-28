import BotClient from './Client'
import { ExtendableEvent } from '@ty/Events'
import FS from 'fs'

export default function (client: BotClient): void {
  FS.readdir('./App/Event/', (err, files) => {
    if (err) console.error(err)

    files.forEach(file => {
      const EventClass: ExtendableEvent = require(`../App/Event/${file}`).default
      const ev = new EventClass()
      ev.init(client)
    })
  })
}
