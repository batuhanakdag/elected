const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Komutlar`)
       .setTitle(`Örnek(Yetkili) Komutları`)
       .setDescription(`!yardım = Yardım Komutlarını Gösterir. \n!davet = Botun Davet Linkini Gönderir :tik4: \n youtube =   yazarak kanalımıza ulaşabilirsiniz`)
       .addField("» Linkler", ` \n[Davet Et](https://discord.gg/jPbuGhk)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/jPbuGhk)`  + "**  **" + `\n [Web Sitesi](Bulunmamaktadır)  `, false)
       .setFooter(`Yapımcı Sunucu Batuhan Akdağoğlu`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};