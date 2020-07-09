const Discord = module.require('discord.js')
const config = module.require('../config')

exports.run = (client, message, args) => {
  if (!config.developers.includes(message.author.id)) {
    message.channel.send(new Discord.MessageEmbed()
      .setTitle(':x: Access Denied!')
      .setColor(0xFF6961)
    )
    return
  }
  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle('어머 개발자님..')
      .addField('뿌슝빠슝합니다..', '멋있어요..', true)
  )
}

module.exports.help = {
  name: '이것은개발자만가능한뿌슝빠슝한명령어',
  alias: ['이것은개발자만가능한뿌슝빠슝한말', 'dlrjtdmsroqkfwkaksrksmdgksQntbdQktbdgksaudfuddj'],
  authority: 'Developer'
}
