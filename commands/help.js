const Discord = module.require('discord.js')
const config = module.require('../config')

exports.run = (client, message, args) => {
    if(!config.developers.includes(message.author.id)) {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(':x: Access Denied!')
            .setColor(0xFF6961)
        );
        return;
    }
    message.channel.send(
        new Discord.MessageEmbed()
            .setTitle("Help")
            .addField(`**${config.prefix}ping**`, `핑을 알려줍니다.`, false)
            .addField(`**${config.prefix}tendinous**`, `개발자들에게 건의해 보세요.`, false)
    );
}

module.exports.help = {
    name: "help",
    alias: ["도움", "도움말", "ehdna", "ehdnaakf"],
    authority: "Developer"
}