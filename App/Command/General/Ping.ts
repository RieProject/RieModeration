import Command from '@components/Command'
import Client from '@scripts/Client'
import { Message, TextChannel } from 'discord.js'

export default class Ping extends Command {
  constructor () {
    super({
      name: ['ping', 'p'],
      description: 'Pong!'
    })
  }

  async execute (_client: Client, message: Message, _args: string[]) {
    const startTime = Date.now()
    message.channel.send(':ping_pong: Wait for it...').then(msg => {
      if (msg ! instanceof TextChannel) return
      const diff = (Date.now() - startTime).toLocaleString()
      msg.edit(`Latency: ${diff} ms`)
    })
  }
}
