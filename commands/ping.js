const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send(
    new MessageEmbed()
      .setTitle('🏓Ping')
      .addField('Discord API Ping', `${client.ws.ping}`, true)
  )
}

module.exports.help = {
  name: 'ping',
  desc: '핑을 알려줍니다.',
  alias: ['핑', 'vld'],
  authority: 'Developer'
}
