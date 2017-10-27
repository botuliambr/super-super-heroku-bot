
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

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
      }
    }
  }
});

function Check(message, ndoac) {
  var msg = message.content;
  var fields = msg.split(' ');
  var cc = fields[1];
  if(ndoac) {
    var ccbase = cc[1];
    CheckCC(cc, function(result) {
       message.channel.sendMessage((result));
    });
  } else {
    var ccbase = cc[1];
    CheckCC(cc, function(result) {
       message.channel.sendMessage((result));
    });
  }
}

function CheckCC(cc, callback) {
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var request = require("request");
request({
  url: "https://127.0.0.1/Apis/Check.php?cc=" + cc
}, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      callback(body);
   } else {
      callback("```\r\n [ " + error + " ] ```");
   }
});
}
