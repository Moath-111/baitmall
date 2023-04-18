exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('رجاءاً أشر الى شخص معين او ضع الـ الاي دي ') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('رجاءاً حدد مبلغاً ممكن لإعطاء الشخص المطلوب') 
  if(authordata.amount < amount) return message.channel.send('يبدو انك لاتملك هذا العدد من الاموال') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`لقد حولت 💸**${amount}** الى ** ${member.user.tag}**.`)
}
exports.help = {
  name: "اعطي",
  aliases: ['اعطي', 'تحويل'],
  usage: `<اعطي <العضو> <المبلغ`
};
