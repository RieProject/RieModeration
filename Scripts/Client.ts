import Config from '../config.json'
import CommandHandler from '@components/CommandHandler'
import { Client, Collection } from 'discord.js'
import { IConfig } from '@ty/Config'

export default class BotClient extends Client {
  public config: IConfig = Config
  public commands = {
    caller: new Collection<string, string>(),
    command: new Collection<string, CommandHandler>()
  }
}
