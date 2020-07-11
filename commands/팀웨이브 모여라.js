const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send(
    new MessageEmbed()
      .setTitle('Team WAVE 집합')
      .addField('모여라 제군들', '<@&656107012836556823>\n모여라모여라 긴급 소집이다\n우리는 야근을 해야한다 일을 하자\n엑슨을 따르자 엑슨을 따르자', true)
  )
  message.channel.send('<@&656107012836556823>')
}

module.exports.help = {
  name: '팀웨이브 모여라',
  alias: ['집합', 'wlqgkq'],
  authority: 'Developer',
  devOnly: true
}
