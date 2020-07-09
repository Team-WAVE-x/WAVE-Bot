const Query = require('../classes/Query')
const badwords = require('../data/badwords.json')

module.exports = (client, msg) => {
  if (msg.author.bot || !msg.guild) return

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
