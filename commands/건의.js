const { MessageEmbed } = require('discord.js')

exports.run = (client, message, args) => {
  message.channel.send(
    new MessageEmbed()
      .setTitle('개발자들아 건의 날라옴')
    // .addField(`건의자 : ${message.author.tag}`, `${args}`, true)
  )
}

module.exports.help = {
  name: 'tendinous',
  desc: '개발자들에게 건의해 보세요.',
  alias: ['건의', 'rjsdml'],
  authority: 'Developer'
}
