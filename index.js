const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const fs = require("fs");

client.on("ready", () => {
  console.log(`Logged in As ${client.user.tag}`);
  client.user.setActivity(`%도움말`);
});

client.commands = new Discord.Collection();

client.on("guildMemberAdd", (guildMember) => {
  guildMember.guild.channels.cache
  .get("724219555743793157")
  .send(new Discord.MessageEmbed()
    .setTitle("🎉새로운 멤버!")
    .addField(`${guildMember.guild.name}에 오신걸 환영합니다!`, `<@${guildMember.id}>`, true));
  if (config.ban.includes(guildMember.id)) {
    //역할 부여
    guildMember.roles.add("710725714986663966");
    console.log(`${guildMember.user.tag} 반동분자 역활지급 완료`);
  } else {
    guildMember.roles.add("708265543425065000");
    console.log(`${guildMember.user.tag} 새로운 멤버들어옴`);
  }
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

  let jsfiles = files.filter((f) => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("불러올 파일이 없습니다.");
    return;
  }

  console.log(`${jsfiles.length}개의 커맨드 로딩중...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} 로딩됨!`);
    props.help.alias.forEach((element) => client.commands.set(element, props));
    client.commands.set(props.help.name, props); // 싫은데 ㅎㅎ
  });
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(config.prefix)) return;

  let cmd = client.commands.get(command.slice(config.prefix.length));

  if (cmd) cmd.run(client, message, args);
});

client.login(config.token);
