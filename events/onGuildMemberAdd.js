const { MessageEmbed } = require('discord.js')

module.exports = (_, guildMember) => {
  guildMember.guild.channels.cache
    .get('724219555743793157')
    .send(
      new MessageEmbed()
        .setTitle('🎉새로운 멤버!')
        .addField(guildMember.guild.name + '에 오신걸 환영합니다!', '<@' + guildMember.id + '>!', true)
    )
  setTimeout(() => guildMember.roles.add('708265543425065000'), 300000)
}
