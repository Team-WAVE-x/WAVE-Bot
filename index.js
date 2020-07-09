// Imports
const Client = require('./classes/Client')
const onReady = require('./events/onReady')
const onMessage = require('./events/onMessage')
const onGuildMemberAdd = require('./events/onGuildMemberAdd')

// Inits
const client = new Client()

// Events
client.regist('ready', onReady)
client.regist('guildMemberAdd', onGuildMemberAdd)
client.regist('message', onMessage)

// Start
client.start()
