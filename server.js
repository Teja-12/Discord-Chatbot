const discord = require("discord.js");
const client = new discord.Client();
const smartestchatbot = require("smartestchatbot");
var x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  let content = message.content; // let content ( a variable used to fetch response ) be equal to the message's content
  if (message.author.bot) return;
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.channel.send(
      `**:x: Please dont mention anyone while talking to me I feel attacked 😭**`
    );
  }
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "Zero", // Add Owner Name Here
    user: message.author.id,
    language: "auto"
  }).then(reply => {
    message.channel.send(`${reply}`);
  });
  message.channel.stopTyping();
});
client.login(process.env.TOKEN); //login using the token
