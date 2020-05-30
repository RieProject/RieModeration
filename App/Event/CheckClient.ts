import ClientEvent from '../../Components/ClientEvent'
import Client from '@scripts/Client'

export default class CheckClient extends ClientEvent {
  constructor () {
    super('ready')
  }

  async handler (client: Client) {
    if (process.env.DEV !== 'true') return
    console.log('Commands:')
    console.log(client.commands.command)
    console.log('Aliases')
    console.log(client.commands.caller)
  }
}
