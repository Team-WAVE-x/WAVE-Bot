const Query = require('../classes/Query')
const badwords = require('../data/badwords.json')
const { MessageEmbed } = require('discord.js')

module.exports = (client, msg) => {
  if (msg.author.bot) return
  if (!msg.guild) {
    msg.client.channels.cache
      .get('671646014121181214')
      .send(
        new MessageEmbed()
          .setTitle('🛑 사용자 문의')
          .addField(`${msg.author.tag}님의 문의`, `${msg.content}`, true)
      )

    console.log(`${msg.author.username}님이 문의하셨습니다.`)
    return
  }
  // 금지어 거르기
  if (badwords.find((word) => msg.content.includes(word))) {
    console.log(msg.author.username + '님이 금지어 사용')
    msg.delete()
    return
  }

  if (!msg.content.startsWith(client.settings.prefix)) return

  const query = new Query(client.settings.prefix, msg.content)
  const target = client.commands.find((c) => c.help.alias.includes(query.cmd) || c.help.name === query.cmd)
  if (target) target.run(client, msg, query.args)
}
