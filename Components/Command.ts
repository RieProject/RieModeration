import Client from '@scripts/Client'
import { Message } from 'discord.js'
import { CommandOptions } from '@ty/Command'

export default class Command {
  public options: CommandOptions

  constructor (options: CommandOptions) {
    this.options = options
  }

  async execute (_client: Client, _message: Message, _args: string[]) {
    throw Error('Not implemented')
  }
}
