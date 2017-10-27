const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {
  console.log(message.channel.id);
  if(message.channel.id.indexOf('channel.isPrivate') == 1) {
    msg.author.sendMessage("``` [ O BOT SÓ FUNCIONA NO GRUPO ]```")
    return;
  } else {
    var msg = message;
    if(msg.content.toLowerCase().startsWith("!chk")) {
        var ndoac = (msg.content.indexOf('--doar') == -1);
        Check(msg, ndoac);
        if(ndoac) {
        message.delete();
      }
    }
  }
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
