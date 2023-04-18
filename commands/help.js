const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("الاوامــــر")
        .setTitle("اوامــــر بــــــيــــــت الـــــــمــــــال الــــــعـــــبـــاســـــي")
        .setURL("")
        .setDescription(`اجمالي الاوامر: ${client.commands.size}`)
        .setColor("BLACK")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `الاستخدامات: ${cmd.help.aliases.join(", ") || "None"}\nطريقة الاستخدام: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "مساعدة",
    aliases: ["لرؤية الاوامر و طلب المساعدة"],
    usage: `مساعدة`
}
