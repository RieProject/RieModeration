import BotClient from './Scripts/Client'

;(async () => {
  require('console-stamp')(console)
  require('dotenv').config()
  require('module-alias/register')

  const client = new BotClient({
    fetchAllMembers: true
  })

  client.on('ready', async () => {
    console.info(`You're login as ${client.user!.tag}`)
  })

  client.login(process.env.TOKEN)
})()
