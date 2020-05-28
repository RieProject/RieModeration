import ClientEvent from '../../Components/ClientEvent'
import Client from '@scripts/Client'

export default class Ready extends ClientEvent {
  constructor () {
    super('ready')
  }

  async handler (client: Client) {
    console.log(`You're login as ${client.user?.tag}.`)
  }
}
