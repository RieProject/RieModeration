import ClientEvent from '../../Components/ClientEvent'
import Client from '@scripts/Client'
import { Message } from 'discord.js'
import yargs from 'yargs-parser'

export default class CheckClient extends ClientEvent {
  constructor () {
    super('message')
  }

  async handler (client: Client, message: Message) {
    if (!message.content.startsWith(client.config.bot_prefix)) return

    const prefix = client.config.bot_prefix
    const sliceArgs = message.content.split(' ')
    const cmd = sliceArgs[0].substring(prefix.length)
    const realArgs = yargs(sliceArgs.slice(1))

    const command = client.commands.command.get(cmd) || client.commands.command.get(client.commands.caller.get(cmd)!)
    if (!command) return

    command.execute(client, message, realArgs)
  }
}
