const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | لا يوجد تجار");
    const embed = new MessageEmbed()
        .setAuthor(`قائمة صدراة ${message.guild.name}!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://images-ext-2.discordapp.net/external/VIeYOxjMggfH8q-iQnGz0kejZzDlslG8U9a9X_CQgHg/%3Fauto%3Dwebp%26s%3D9e849f7e5fbcda2aabe6e8d52fec40e606cffee4/https/preview.redd.it/rfsigrx155q11.png?width=580&height=422")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "غير-معروف#0000"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "التجار",
    aliases: ["الصدارة"],
    usage: `التجار`
}
