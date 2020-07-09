const { MessageEmbed } = require('discord.js')
const { existsSync: exist, writeFileSync: write } = require('fs')

if (!exist('./data/blacklist.json')) write('./data/blacklist.json', '[]')

const blacklist = require('../data/blacklist.json')

module.exports = (_, guildMember) => {
  guildMember.guild.channels.cache
    .get('724219555743793157')
    .send(
      new MessageEmbed()
        .setTitle('🎉새로운 멤버!')
        .addField(guildMember.guild.name + '에 오신걸 환영합니다!', '<@' + guildMember.id + '>!', true)
    )

  if (blacklist.includes(guildMember.id)) {
    // 역할 부여
    guildMember.roles.add('710725714986663966')
    console.log(guildMember.user.tag + ' 반동분자 역활지급 완료')
  } else {
    guildMember.roles.add('708265543425065000')
    console.log(guildMember.user.tag + ' 새로운 멤버들어옴')
  }
}
