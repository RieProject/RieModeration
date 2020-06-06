import Config from '../config.json'
import CommandHandler from '@components/CommandHandler'
import { Client, Collection } from 'discord.js'
import { IConfig } from '@ty/Config'
import Moment from 'moment'
import Constant from '../Components/Constant'

export default class BotClient extends Client {
  public config: IConfig = Config
  public cooldown: Collection<string, Moment.Moment> = new Collection()
  public constant = Constant

  public commands = {
    caller: new Collection<string, string>(),
    command: new Collection<string, CommandHandler>()
  }
}
