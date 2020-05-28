import Client from '@scripts/Client'
import { Message } from 'discord.js'
import { CommandOptions } from '@ty/Command'

export default class CommandHandler {
  public options: CommandOptions

  constructor (options: CommandOptions) {
    this.options = options
  }

  public execute (_client: Client, _message: Message, _args: string[]): Promise<void> {
    throw new Error('Not implemented')
  }
}
