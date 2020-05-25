import BotClient from './Client'
import { ExtendableEvent } from '@ty/Events'
import FS from 'fs'

export default function (client: BotClient): void {
  FS.readdir('./Components/Event/', (err, files) => {
    if (err) console.error(err)

    files.forEach(file => {
      const EventClass: ExtendableEvent = require(`@components/Event/${file}`).default
      const ev = new EventClass(client)
      ev.init()
    })
  })
}
