const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("المتجر")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("اكتب: /شراء <المنتج> لشراء المنتج")
  return message.channel.send(embed);
};

exports.help = {
  name: "المتجر",
  aliases: [],
  usage: `المتجر`
};
