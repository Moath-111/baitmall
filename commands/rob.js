exports.execute = async (client, message, args) => {
  let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if(!target) return message.reply("من هو الذي تحاول سرقته؟")
  let messages = [
    `تم القبض عليك اثناء محاولتك سرقة ${target} وسيتم القائك في السجن`,
    `مسوي متخفي؟ ${target} تم ابلاغ الشرطة عليك`,
    `فشلت عملية سرقتك لـ ${target} وسوف تأتي الشرطة قريبا`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return message.reply(`لقد حاولت سرقة شخص ما قبل قليل, عد لاحقاً بعد ${rob.time.seconds} ثواني`);
    if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    else { 
      let x = client.eco.fetchMoney(target.id).amount - amount 
      
      client.eco.setMoney(target.id,parseInt(x))
      message.reply(`لقد سرقت ${target} وحصلت على **${rob.amount}** 💸. الان انت تملك **${rob.after}** 💸.`);
    }
};

exports.help = {
    name: "سرقة",
    aliases: [],
    usage: "<سرقة <المستخدم"
}
