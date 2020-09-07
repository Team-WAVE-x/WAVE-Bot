const Query = require('../classes/Query')
const { MessageEmbed } = require('discord.js')
const { get } = require('superagent')

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

    client.users.cache
      .get(msg.author.id)
      .send(
        new MessageEmbed()
          .setTitle('Team WAVE')
          .addField('건의가 접수되었습니다.', '팀 운영진들이 빠른 시일내에 확인하여 답변드리겠습니다.', true)
      )
    return
  }

  // 금지어 거르기
  get('localhost:8080/check/' + encodeURIComponent(msg.content), (err, res) => {
    if (err) console.log(err)
    else if (res.body.result) {
      console.log(msg.author.username + '님이 금지어 사용')
      msg.delete()
    }
  })

  if (!msg.content.startsWith(client.settings.prefix)) return

  const query = new Query(client.settings.prefix, msg.content)
  const target = client.commands.find((c) => c.help.alias.includes(query.cmd) || c.help.name === query.cmd)

  if (target.help.authority === 'Developer' && !client.settings.developers.includes(msg.author.id)) {
    return msg.channel.send(new MessageEmbed({ title: ':x: Access Denied!', color: 0xFF6961 }))
  }

  if (target) target.run(client, msg, query.args)
}
