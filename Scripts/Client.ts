import DiscordJS from 'discord.js'
import Config from '../config.json'
import { IConfig } from '@ty/Config'

export default class BotClient extends DiscordJS.Client {
  config: IConfig

  constructor (opt: DiscordJS.ClientOptions) {
    super(opt)
    this.config = Config
  }
}
