const Discord = module.require('discord.js')
const config = module.require('../config')

exports.run = (client, message, args) => {
    message.channel.send(
        new Discord.MessageEmbed()
            .setTitle("Help")
            .addField(`**${config.prefix}ping**`, `핑을 알려줍니다.`, true)
    );
}

module.exports.help = {
    name: "help",
    alias: ["도움", "도움말", "ehdna", "ehdnaakf"],
    authority: "Basic"
}