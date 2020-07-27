const discord = require("discord.js")
const client = new discord.client()

client.on('ready', () => {
  console.log('Ready for chatting!| Bot by 0_0')
});

client.on('message')
          