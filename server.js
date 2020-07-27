const discord = require("discord.js")
const client = new discord.client()
const alexa = require('alexa-bot-api')
var chatbot = new alexa('aw2plm') //free access key for Mewtwo Machine channel (provided by CTK WARRIOR)
client.on('ready', () => {
  console.log('Ready for chatting!| Bot by 0_0')
});

client.on('message', async message => {
  let content = message.content
  
})
          