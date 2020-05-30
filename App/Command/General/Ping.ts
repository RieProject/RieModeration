import CommandHandler from '@components/CommandHandler'
import Client from '@scripts/Client'
import { Message } from 'discord.js'
import { Arguments as ArgsArguments } from 'yargs-parser'

export default class Ping extends CommandHandler {
  constructor () {
    super({
      name: ['ping', 'p'],
      description: 'Pong!'
    })
  }

  public async execute (_client: Client, message: Message, _args: ArgsArguments) {
    const time = Date.now()
    message.channel.send(':ping_pong: Wait for it.').then(msg => {
      const diff = (Date.now() - time).toFixed(0)
      msg.edit(`:ping_pong: Latency: ${diff}ms`)
    })
  }
}
