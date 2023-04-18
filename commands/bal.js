const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`الرصيد`)
        .addField(`المستخدم`, `<@${userBalance.user}>`)
        .addField(`الرصيد`, `${userBalance.amount} 💸`)
        .addField(`الموقع`, userBalance.position)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "رصيد",
    aliases: ["اموالي", "رصيد"],
    usage: `رصيد`
}
