import ClientEvent from '../../Components/ClientEvent'
import Client from '@scripts/Client'
import { Message, DMChannel } from 'discord.js'
import yargs from 'yargs-parser'
import Moment from 'moment'

export default class CheckClient extends ClientEvent {
  constructor () {
    super('message')
  }

  async handler (client: Client, message: Message) {
    if (!message.content.startsWith(client.config.bot_prefix)) return

    // Initiator
    const prefix = client.config.bot_prefix
    const sliceArgs = message.content.split(' ')
    const cmd = sliceArgs[0].substring(prefix.length)
    const realArgs = yargs(sliceArgs.slice(1))

    // Personal Initiator
    const author = message.author
    const guild = message.guild
    const botInGuild = guild?.members.cache.get(client.user?.id!)
    const userInGuild = guild?.members.cache.get(author.id)

    // Command Checker
    const command = client.commands.command.get(cmd) || client.commands.command.get(client.commands.caller.get(cmd)!)
    if (!command) return
    const cmdName = typeof command.options.name === 'string' ? command.options.name : command.options.name[0]

    /**
     * Handling Command
     */
    // No bot
    if (author.bot) return
    // If owner
    if (command.options.ownerOnly && !client.config.maintener.includes(author.id)) return

    // Check bot permission
    if (botInGuild && command.options.botPermission) {
      let checker = false
      command.options.botPermission.forEach(botPerms => {
        if (!botInGuild.hasPermission(botPerms)) checker = true
      })
      if (checker) return
    }

    // Check user permission
    if (userInGuild && command.options.userPermission) {
      let checker = false
      command.options.userPermission.forEach(userPerms => {
        if (!userInGuild.hasPermission(userPerms)) checker = true
      })
      if (checker) return
    }

    // Check DM
    if (command.options.enableDM) {
      if (!command.options.enableDM && message.channel instanceof DMChannel) return
    }

    /**
     * Cooldown Handling
     */
    if (message.guild && !client.config.maintener.includes(author.id)) {
      const cooldownGetter = `${author.id}:${guild!.id}:${cmdName}`
      const cooldown = client.cooldown.get(cooldownGetter)
      const cooldownTime = typeof command.options.cooldown === 'number'
        ? command.options.cooldown
        : client.config.cooldown_default
      if (cooldown) {
        const now = Moment()
        const executePlusCd = cooldown.add(cooldownTime, 'seconds')
        const diff = now.diff(executePlusCd, 's', true)
        if (diff < 0) {
          return message.reply(`you can using this command again in **${(diff * -1).toFixed(1)} seconds**.`)
        } else {
          client.cooldown.set(cooldownGetter, Moment())
        }
      } else {
        client.cooldown.set(cooldownGetter, Moment())
      }
    }

    /**
     * Command Executor
     */
    try {
      command.execute(client, message, realArgs)
      console.info(`${author.tag} executing ${cmdName}!`)
    } catch (error) {
      message.reply(client.constant.error(error.message))
    }
  }
}
