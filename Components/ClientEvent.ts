import { Events } from '@ty/Events'
import Client from '@scripts/Client'

export default class ClientEvent {
  private event: Events
  private client: Client

  constructor (client: Client, event: Events) {
    this.event = event
    this.client = client
  }

  public async handler (...args: any[]): Promise<void> {
    console.log(args)
    throw Error('Not implemented')
  }

  public async init () {
    this.client.on(this.event as any, (...args) => {
      this.handler(this.client, ...args)
    })
  }
}
