const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var önEk = ayarlar.prefix;
var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});
 
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// Server.js Komutları Başlangıç





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Naber <a:heart:755430335553994782> ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'müzik bilgi') {
    msg.reply('https://trexbotnote.glitch.me/raw/LUIGQUyRsN');
  }
});





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bb') {
    msg.reply(' Hoşçakal Dostum ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kötü sen') {
    msg.reply(' bende biraz kötüyüm ama önemli olan senin iyi olman boşver takma gerek yok ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kimsin') {
    msg.reply(' Batuhan Akdağoğlu Tarafından Yapılan Bir Bot Onun Sunucusuna Katılmak İçin : https://discord.gg/g842Gsy ');
  }


});client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sağol') {
    msg.reply(' önemli değil ');
  }
});




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kimsin ?') {
    msg.reply(' Batuhan Akdağoğlu Tarafından Yapılan Bir Bot Onun Sunucusuna Katılmak İçin : https://discord.gg/g842Gsy ');
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'by') {
    msg.reply('<a:heart:755430328159698954> Batuhan Akdağoğlu Tarafından Yapılan Bir Bot Onun Sunucusuna Katılmak İçin : https://discord.gg/g842Gsy ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ben verim mi') {
    msg.reply(' Ayıp olur öyle ama Gelişmem için bağış yapabilirsin                                                     İninal Barkod: 4093540661882 ');
  }
});






client.on('message', msg => {
  if (msg.content.toLowerCase() === 'youtube') {
    msg.reply('<a:heart:755430328159698954> Abone Ol Kankam <a:heart:755430328159698954>                                                                                              https://www.youtube.com/channel/UCXiu-Ca1Q7fmyfLtSDG0nRw ');
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'insta') {
    msg.reply('<a:heart:755430328159698954> Takip Et Kankam https://www.instagram.com/batuhanakdagoglu/https://www.instagram.com/muhammetlol_ytb/ <a:heart:755430328159698954>');
  }

});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'insta') {
    msg.reply('<a:heart:755430328159698954> Takip Et Kankam https://www.instagram.com/batuhanakdagoglu/https://www.instagram.com/muhammetlol_ytb/ <a:heart:755430328159698954>');
  }

});




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Among us') {
    msg.reply('Among Us Odasında Bekle Ben Haber Veriyorum Ekibe @everyone   ');
  }
});     

 

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tiktok') {
    msg.reply('https://www.tiktok.com/@esrarengizkasabamtr https://www.tiktok.com/@muhammet_lol @everyone   ');
  }
});     



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi sen') {
    msg.reply('çok kötüyüm ya Şu Kurucu Maaşımı bir türlü vermedi Cevap Seçenekleri 1: ben verim mi 2:');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '+dp') {
    msg.reply(' https://discord.com/oauth2/authorize?client_id=766310650375831614&scope=bot&permissions=8 @everyone   ');
  }
});     

















////////////// Server.js Komutları Son











////////////// Aşağıyı Elleme
require("./util/eventLoader")(client);

client.login(ayarlar.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);




client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})



   



client.on("guildMemberAdd", member => {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hoşgeldin Dostum')
.setDescription('┏╋━━━━━━◥◣◆◢◤━━━━━━╋┓   ・☭ Biricik Sunucumuza Davetlesin. ・Eğlenceli Bir Ortama Sahip Bir Sunucudur. ・Oyun Odaları, Müzik Odaları, Özel Odalar Ve Daha Fazlası ! ・İlgili Ve Aktif Yetkili Kadrosu. ・Burası Başka Bir Dünyaya Açılan Kapıdır, Senide Bekliyoruz ! ・Yetkili Alımları Olucaktır ! ┗╋━━━━━━━◥◣◆◢◤━━━━━━╋┛')
member.send(embed)
})








const yourID = "755412954492698694"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "!kayıtol" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
let initialMessage = ``; //Dilediğiniz Şeyi Yazabilirsiniz
const roles = ["@🌀│Friend ", "764518152418885673"]; //İstediğiniz Rolü Yazabilirsiniz
const reactions = ["🧨", "🎭"]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "NzY2MzEwNjUwMzc1ODMxNjE0.X4hgaA.P_J-xnrsyTI2UIMdZRlhG04mLWI";  //Buraya botunuzun tokenini koyunuz
                     

//Load up the bot...
const discord = require('discord.js');
const bot = new Discord.Client();
bot.login(botToken);

//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Kayıt Olmak İçin **"${role}"** Emojisine Tıkla!`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});










const events = {

    MESSAGE_REACTION_ADD: 'messageReactionAdd',

    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',

};

client.on('raw', async event => {

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;

    const anto = client.users.get(data.user_id);

    const channel = client.channels.get(data.channel_id) || await anto.createDM();

    if (channel.messages.has(data.message_id)) return;

    const message = await channel.fetchMessage(data.message_id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;

    const reaction = message.reactions.get(emojiKey);

    client.emit(events[event.t], reaction, anto);

});

client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767786240719978507") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🕵️‍♂️") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("764386915381411841")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});


client.on('guildMemberAdd', async member => {
   await member.setNickname(`♅ İsim | Yaş`) //yeni gelen kullanıcının adını değiştirme
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.find(x => x.id === `764518181959237652`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.RichEmbed()
  .setTitle(
      "Afrodex Light - Youtube "
    )
    .setDescription(`Sunucumuza Hoş geldin ${member} 
Seninle Beraber **${message.guild.memberCount}** Kişiyiz.
Kaydını Yeni Yaptırmış Hayırlı Olsun.
@🔒│Admin  Rolündeki Yetkililer Seninle İlgilenecektir.
'

Hesap Açılalı: **${gecen}** Olmuş.
Bu Kullanıcı: **${takizaman}**
`)
.setColor('PURPLE')
message.send(taki)
  
          });


client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802069582348308") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🦴") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767812057939705877")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});

client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802425641140234") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🦴") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767813227492933642")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});

client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802502774652939") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🦴") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767812530969116692")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});
//MİNECRAFT ROLÜ

client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802502774652939") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🏝") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767812057939705877")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767812057939705877")//Diniz.
    }

  

  }

});



client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802233684230225") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🦴") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767813011691143239")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});


client.on('messageReactionAdd', (reaction, user) => {

  if (reaction.message.id == "767802329394446336") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.

    if (reaction.emoji.name == "🦴") {//Dilediğini emojiyi koyabilirsiniz.

      reaction.message.guild.members.get(user.id).addRole("767811523346300958")//Diniz.
 reaction.message.guild.members.get(user.id).removeRole("767785122342109225")//Diniz.
    }

  

  }

});

client.on("raw", event => {
const rolid = "767813227492933642" //rol idsi
const msgid = "767802502774652939" //msg idsi
const emojiid = "🚓" //emoji idsi
  if (
    event.t == "MESSAGE_REACTION_ADD" ||
    event.t == "MESSAGE_REACTION_REMOVE"
  ) {
    if (event.d.message_id === msgid) {
      if (event.d.user_id !== client.user.id) {
        let reaction = event.d.emoji.id;
        if (reaction === emojiid) {
          var myRole = rolid;
          defRole(myRole);
        }
        function defRole() {
          const myGuilds = client.guilds.get(event.d.guild_id);
          if (event.t === "MESSAGE_REACTION_ADD") {
            myGuilds
              .fetchMember(event.d.user_id)
              .then(member => member.addRole(myGuilds.roles.get(myRole)))
              .catch(console.error);
          } else {
            myGuilds
              .fetchMember(event.d.user_id)
              .then(member => member.removeRole(myGuilds.roles.get(myRole)))
              .catch(console.error);
          }
        }
      }
    }
  }
});





//sayaç



client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.size) {
      const embed = new Discord.RichEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı :tada:! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});







//afk

client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});






client.on('guildMemberAdd', async (member, guild, message) => {
 
let role = db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = db.fetch(`autoRole_${member.guild.id}`)
 let i = db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
 
 
  if (!i) return
if (!role) {
  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription("**Sunucuya Yeni Katılan** @" + member.user.tag + " **Kullanıcısına** <@&" + otorol + ">  **Rolü verildi.**")
                        .setColor('0x36393E')
                        .setFooter(`Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)
} else if (role) {
    member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('0x36393E')
                        .setFooter(`Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)
 
}
 
 } catch (e) {
 console.log(e)
}
}
 
});



client.on('guildMemberAdd', member => {// chimp#0110
if(!member.guild.id === '764126666347642880') return;
if(member.bot) return;
member.guild.members.get(member.id).addRole('764386915381411841')
 client.channels.get('764518181959237652').send(`${member.tag}, isimli kişi giriş yaptı. Ona ${member.guild.roles.get('764386915381411841').name} isimli rolü verdim.`)
})// codare


