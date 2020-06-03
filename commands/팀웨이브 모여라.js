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
            .setTitle("Team WAVE 집합")
            .addField(`모여라 제군들`, `<@&656107012836556823>\n모여라모여라 긴급 소집이다\n우리는 야근을 해야한다 일을 하자\n엑슨을 따르자 엑슨을 따르자`, true)
    );
    message.channel.send("<@&656107012836556823>")
}

module.exports.help = {
    name: "팀웨이브 모여라",
    alias: ["집합", "wlqgkq"],
    authority: "Developer"
}