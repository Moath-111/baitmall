const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("رجاءاً حدد مستخدماً");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("رجاءاً حدد مبلغاً معين");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`تم تحديث الاموال`)
        .addField(`المستخدم`, `<@${data.user}>`)
        .addField(`الرصيد الاجمالي`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "تعيين-الاموال",
    aliases: ["تعيين الاموال"],
    usage: `<تعيين-الاموال @المستخدم <المبلغ`
}
