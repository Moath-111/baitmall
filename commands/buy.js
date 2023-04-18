const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("يبدو انك فقير");
  let item = args[0];
  if (!item) return message.channel.send("ما الذي تحاول شرائه؟");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("هذا المنتج غير موجود, ركز ارجوك");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("رصيدك غير كافي تحتاج الى :coin: "+hasItem.cost+" لشراء هذا المنتج");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`لقد اشتريت **${item}** مقابل **:coin: ${hasItem.cost}**.`);
};

exports.help = {
  name: "اشتري",
  aliases: [],
  usage: `<اشتري <المنتج`
};
