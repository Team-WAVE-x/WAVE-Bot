const Discord = module.require('discord.js')

exports.run = (client, message, args) => {
    message.channel.send(
        new Discord.MessageEmbed()
            .setTitle("개발자들아 건의 날라옴")
            .addField(`건의자 : ${message.author.tag}`, `${args}`, true)
    );
} // 마소 멍청이

module.exports.help = {
    name: "tendinous",
    alias: ["건의", "rjsdml"],
    authority: "Basic"
}