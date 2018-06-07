const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
  const guildMember = message.member;
  guildMember.addRole('bot-added-role');
});

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
	
    if(message.startsWith('!comandos')) {
        MostrarComandos(msg);
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
	  
    function ons(message) {
		message.channel.send("Estou online!");
    }
	
    function MostrarComandos(message) {
        message.reply('Comandos enviados no seu privado! (**Mensagens Diretas**)');
        var embed = new Discord.RichEmbed()
            .addField("!cpf", "Consulte um CPF! Exemplo: !cpf 06927173404", true)
			.addField("!bin", "Consulte uma BIN! Exemplo: !bin 498408", true)
			.addField("!chk", "Testador de Full! Exemplo: !chk 5464795013669943|05|2020|073", true)
			.addField("!bot", "Fale com o bot (Uma divers?o). Exemplo: !bot oi", true)
        message.author.sendEmbed(embed);
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
