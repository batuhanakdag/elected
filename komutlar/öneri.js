const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: !öneri <öneriniz>')).then(a =>{a.delete(13000)}) ;
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Öneriniz Bildirildi!')
message.channel.send(embed).then(a =>{a.delete(2000)})
message.delete(2000) ;
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kullanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Öneri", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('768461348111515668').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Tavsiye bildirirsiniz',
  usage: 'öneri <öneriniz>'
};