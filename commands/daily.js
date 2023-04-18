module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`لقد تحصلت على راتبك اليومي بالفعل, عد بعد ${addMoney.time.hours} ساعات, ${addMoney.time.minutes} دقائق و ${addMoney.time.seconds} ثواني للحصول على راتبك اليومي مجددا`);
    else return message.reply(`لقد تحصلت على **${addMoney.amount}** 💸 كـراتبك اليومي والان انت تملك **${addMoney.after}** 💸.`);
};

module.exports.help = {
    name: "راتب",
    aliases: ["الراتب اليومي"],
    usage: "راتب"
}
