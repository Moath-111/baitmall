exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !client.config.admins.includes(message.member.id)) return message.channel.send(`بادئة هذا السيرفر **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix) {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | تم اعادة تعيين البادئة لهاذا السيرفر`);
    } else {
        let setTo = client.db.set(`prefix_${message.guild.id}`, prefix);
        return message.channel.send(`✅ | تم تعيين البادئة الى \`${setTo}\`.`);
    }
}

exports.help = {
    name: "البادئة",
    aliases: ["تعيين البادئة"],
    usage: `البادئة`
}
