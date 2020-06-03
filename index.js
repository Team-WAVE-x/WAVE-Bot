const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const fs = require("fs")

client.on("ready", () => {
  console.log(`Logged in As ${client.user.tag}`);
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err)

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("불러올 파일이 없습니다.")
        return
    }

    console.log(`${jsfiles.length}개의 커맨드 로딩중...`)

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${i + 1}: ${f} 로딩됨!`)
        client.commands.set(props.help.name, props)
    })
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g)
  let command = messageArray[0]
  let args = messageArray.slice(1);

  if (!command.startsWith(config.prefix)) return;

  let cmd = client.commands.get(command.slice(config.prefix.length))

  try {
      if(cmd) cmd.run(client, message, args);
  } catch (error) {
      message.channel.send("> 오류: " + error)
  }
})

client.login(config.token);