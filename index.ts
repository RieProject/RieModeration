import BotClient from './Scripts/Client'
import InitEventHandler from './Scripts/InitEventHandler'

;(async () => {
  require('console-stamp')(console)
  require('dotenv').config()
  require('module-alias/register')

  const client = new BotClient({
    fetchAllMembers: true
  })

  InitEventHandler(client)

  client.login(process.env.TOKEN)
})()
