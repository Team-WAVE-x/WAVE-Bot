const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send(
    new MessageEmbed()
      .setTitle('어머 개발자님..')
      .addField('뿌슝빠슝합니다..', '멋있어요..', true)
  )
}

module.exports.help = {
  name: '이것은개발자만가능한뿌슝빠슝한명령어',
  alias: ['이것은개발자만가능한뿌슝빠슝한말', 'dlrjtdmsroqkfwkaksrksmdgksQntbdQktbdgksaudfuddj'],
  authority: 'Developer',
  devOnly: true
}
