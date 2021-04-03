const discord = require("discord.js");
const client = new discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa(); // Setting up the client 
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  let content = message.content; // let content ( a variable used to fetch response ) be equal to the message's content
  chatbot.getReply(content, "english").then(response =>
    message.channel.send(`${message.author}`, {
      embed: {
        description: `${response}`
      }
    })
  ); //get chatbot's reply
});
client.login(process.env.TOKEN); //login using the token
