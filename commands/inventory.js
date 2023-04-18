const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`مخزون ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`لا توجد اغراض لعرضها`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`الاسم: ${k}`,`الكمية: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "المخزون",
  aliases: ["مخزونك"],
  usage: `المخزون`
}

