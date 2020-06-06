import Client from '@scripts/Client'
import CommandHandler from '@components/CommandHandler'

export default function (client: Client, cmd: CommandHandler): string {
  const cmdStr = typeof cmd.options.name === 'string'
    ? cmd.options.name
    : cmd.options.name[0]
  const usage = cmd.options.args
  let defaultString = `${client.config.bot_prefix}${cmdStr}`

  if (!usage) return defaultString
  if (!cmd.options.args) return defaultString

  defaultString += ' '
  usage.forEach(args => {
    // Optional
    if (args.optional) {
      defaultString += `[${typeof args.optional === 'string' ? args.optional : args.optional.join('|')}]`
    } else if (args.required) {
      defaultString += `<${typeof args.required === 'string' ? args.required : args.required.join('|')}>`
    }
  })

  return defaultString
}
