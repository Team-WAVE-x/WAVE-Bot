const Discord = module.require('discord.js')

exports.run = (client, message, args) => {
  if (!client.settings.developers.includes(message.author.id)) {
    message.channel.send(new Discord.MessageEmbed()
      .setTitle(':x: Access Denied!')
      .setColor(0xFF6961)
    )
    return
  }
  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle('개발자들아 건의 날라옴')
    // .addField(`건의자 : ${message.author.tag}`, `${args}`, true)
  )
}

module.exports.help = {
  name: 'tendinous',
  alias: ['건의', 'rjsdml'],
  authority: 'Developer'
}
