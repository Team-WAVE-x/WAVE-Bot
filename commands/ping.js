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
            .setTitle("🏓Ping")
            .addField("Discord API Ping", `${client.ws.ping}`, true)
    );
}

module.exports.help = {
    name: "ping",
    alias: ["핑", "vld"],
    authority: "Developer"
}