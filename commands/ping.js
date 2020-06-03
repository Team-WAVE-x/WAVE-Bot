const Discord = module.require('discord.js')

exports.run = (client, message, args) => {
    message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("🏓Ping")
          .addField("Discord API Ping", `${client.ws.ping}`, true)
    );
}

module.exports.help = {
    name: "ping"
}