const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("رجاءاً حدد مستخدماً");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("رجاءاً حدد مبلغا معين");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`تمت اضافة الاموال`)
        .addField(`المستفيد`, `<@${data.user}>`)
        .addField(`المبلغ المعطى`, `${data.amount} 💸`)
        .addField(`الرصيد الاجمالي`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "اضف-اموال",
    aliases: ["اضافة-اموال"],
    usage: `<اضف-اموال @المستخدم <المبلغ`
}
