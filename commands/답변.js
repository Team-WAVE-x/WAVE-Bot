const Discord = module.require('discord.js')

exports.run = (client, message, args) => {
  if (!client.settings.developers.includes(message.author.id)) {
    message.channel.send(new Discord.MessageEmbed()
      .setTitle(':x: Access Denied!')
      .setColor(0xFF6961)
    )
    return
  }


  let msg = message.content.slice(4, message.content.length).split('\/')



  client.users.cache
      .get(msg[0])
      .send(
        new Discord.MessageEmbed()
        .setTitle("Team WAVE")
        .addField(msg[1], msg[2], true)
      )

   return


}

module.exports.help = {
  name: '답변',
  alias: [],
  authority: 'Developer'
}
