import { Events } from '@ty/Events'
import Client from '@scripts/Client'

export default class ClientEvent {
  private event: Events

  constructor (event: Events) {
    this.event = event
  }

  public async handler (..._args: any[]): Promise<void> {
    throw Error('Not implemented')
  }

  public init (client: Client) {
    client.on(this.event as any, (...args) => {
      this.handler(client, ...args)
    })
  }
}
