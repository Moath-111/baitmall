exports.execute = async (client, message, args) => {
    let users = [
        "المهدي",
        "هادية",
        "جعفر",
        "شمغذب حم"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Begon Thot! Come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** انقلع يا شحاذ! جرب في وقت حلاق`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** تصدق عليك بمبلغ **${beg.amount}** 💸. الان انت تملك **${beg.after}** 💸.`);
};

exports.help = {
    name: "اشحذ",
    aliases: [],
    usage: "اشحذ"
}
