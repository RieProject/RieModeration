import CommandHandler from '@components/CommandHandler'
import Client from '@scripts/Client'
import { Message } from 'discord.js'
import { Arguments as ArgsArguments } from 'yargs-parser'
import util from 'util'

export default class Ping extends CommandHandler {
  constructor () {
    super({
      name: 'eval',
      description: 'Eval command',
      ownerOnly: true,
      args: [
        { required: 'code' }
      ]
    })
  }

  public async execute (client: Client, message: Message, args: ArgsArguments): Promise<any> {
    const code = args._.join(' ')
    // Detect the blockquote
    if (!code.startsWith('```js') && !code.startsWith('```')) {
      return message.reply(client.constant.usage(this.options.usage!))
    } else {
      const newScript = code
        .match(/[^```]/gm)!
        .join('')
        .split('\n')
        .splice(1)
        .join('')

      // Try the code
      try {
        let __eval__ = eval(newScript) // eslint-disable-line
        console.log(__eval__)

        if (typeof __eval__ !== 'string') {
          __eval__ = util.inspect(__eval__, { depth: 0 })
        }

        message.channel.send(`Output:\n\`\`\`js\n${__eval__}\`\`\``)
      } catch (error) {
        message.channel.send(`Output:\n\`\`\`${error.message}\`\`\``)
      }
    }
  }
}
