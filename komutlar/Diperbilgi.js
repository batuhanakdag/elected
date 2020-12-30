const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Komutlar`)
       .setTitle(`Örnek(Yetkili) Komutları`)
       .setDescription(`!yardım = Yardım Komutlarını Gösterir. \n!davet = Botun Davet Linkini Gönderir \n Bu Şekilde yaparak komutlarınınızı ekleyin.`)
       .addField("» Linkler", ` \n[Davet Et](https://goo.gl/2WhBSB)` + "**  **" + `\n[Destek Sunucusu](https://discord.gg/Hn2sqc5)`  + "**  **" + `\n [Web Sitesi](https://gnargebot.glitch.me/)  `, false)
       .setFooter(`Yapımcı Sunucu CodAre`)
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