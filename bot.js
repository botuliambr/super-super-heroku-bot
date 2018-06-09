const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (msg) => {
	
    const message = msg.content.toLowerCase();
    if(message.startsWith('!chk')) {
      if(msg.channel.id !== '454076709013291020') {
        msg.channel.send({embed: {
            color: 1752220,
            description: "Utilizar este comando em <#454076709013291020>"
          }});
        return;
    }
        Check(msg);
    }
	
    if(message.startsWith('!cpf')) {
      if(msg.channel.id !== '454076709013291020') {
        msg.channel.send({embed: {
            color: 1752220,
            description: "Utilizar este comando em <#454076709013291020>"
          }});
        return;
    }
        CheckCPF(msg);
    }
	
    if(message.startsWith('!bin')) {
      if(msg.channel.id !== '454076709013291020') {
        msg.channel.send({embed: {
            color: 1752220,
            description: "Utilizar este comando em <#454076709013291020>"
          }});
        return;
    }
        VerifyBin(msg);
    }
	
    if(message.startsWith('!bot')) {
        FalarComObot(msg);
    }
	
    if(message.startsWith('!on?')) {
        ons(msg);
    }
	
});

bot.on('guildMemberAdd', member =>{
	
	var role = member.guild.roles.find('name', 'MEMBROS');
	member.addRole(role);
	
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
  function CheckCPF(message) {
    	var msg = message.content;
    	var author = message.author.username;
    	var fields = msg.split(' ');
    	var cpf = fields[1];
        Request("http://thelimaochecker.tk/bot/cpf.php?cpf=" + cpf + "&author=" + author, function(result) {
		message.channel.send(result);
     	 });
      }
  function VerifyBin(message) {
    var msg = message.content;
    var fields = msg.split(' ');
    var bin = fields[1];
      Request("http://thelimaochecker.tk/bot/bin.php?bin=" + bin, function(result) {
            message.channel.send(result);
      });
  }
  
    function FalarComObot(message) {
        var msg = message.content;
        var msge = msg.replace(".", "");
          Request("http://thelimaochecker.tk/painel/full/bot.php?msg=" + msge, function(result) {
                message.channel.send(result);
          });
      }

    function statusSender(message) {
        var msg = message.content;
        var msge = msg.replace("!status", "");
          Request("http://thelimaochecker.tk/painel/full/status, function(result) {
                message.channel.send(result);
          });
      }
	  
    function ons(message) {
		message.channel.send("Estou online!");
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
