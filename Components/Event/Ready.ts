import ClientEvent from '../ClientEvent'
import Client from '@scripts/Client'

export default class Ready extends ClientEvent {
  constructor (client: Client) {
    super(client, 'ready')
  }

  async handler (client: Client) {
    console.log(`You're login as ${client.user?.tag}.`)
  }
}
