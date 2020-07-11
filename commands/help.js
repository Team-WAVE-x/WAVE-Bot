const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
  const embed = new MessageEmbed()

  client.commands.forEach((command) => {
    const { help = { } } = command

    if (help.authority === 'Developer') return
    embed.addField(client.settings.prefix + help.name, help.desc || '설명이 없습니다', false)
  })

  message.channel.send(embed)
}

module.exports.help = {
  name: 'help',
  desc: '이 메세지를 출력합니다',
  alias: ['도움', '도움말', 'ehdna', 'ehdnaakf'],
  authority: 'Developer'
}
