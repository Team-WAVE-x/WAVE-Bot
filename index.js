const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const config = require("./config");

client.on("ready", () => {
  console.log("Bot Start");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(config.prefix)) return; //거르기

  const cmd = msg.content.replace(config.prefix, "");

  if (cmd === "ping") { // ping
    msg.channel.send(
      new MessageEmbed()
        .setTitle("🏓Ping")
        .addField("Discord API Ping", `${client.ws.ping}`, true)
    );
  }
  if (cmd === "help") { // help
    msg.channel.send(
      new MessageEmbed()
        .setTitle("📜Help")
        .addField(`${config.prefix}ping`, `send ping`, true)
    );
  }
});

client.login(config.token);