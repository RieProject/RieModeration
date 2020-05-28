import BotClient from './Scripts/Client'
import InitEventHandler from './Scripts/InitEventHandler'
import InitLoadCommand from './Scripts/InitLoadCommand'

;(async () => {
  require('console-stamp')(console)
  require('dotenv').config()
  require('module-alias/register')

  const client = new BotClient({
    fetchAllMembers: true
  })

  InitEventHandler(client)
  InitLoadCommand(client)

  client.login(process.env.TOKEN)
})()
