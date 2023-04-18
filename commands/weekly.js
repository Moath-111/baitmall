exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`لقد تحصلت على راتبك الاسبوعي بالفعل, عد بعد ${addMoney.time.days} ايام, ${addMoney.time.hours} ساعات, ${addMoney.time.minutes} دقائق و ${addMoney.time.seconds} ثواني, للحصول على راتبك الاسبوعي مجددا`);
    else return message.reply(`لقد تحصلت على **${addMoney.amount}** 💸 كـ راتبك الاسبوعي والان انت تملك **${addMoney.after}** 💸. لاكنك بتخسر راتب اذا ما بايعت الخليفة`);
};

exports.help = {
    name: "راتب-اسبوعي",
    aliases: [],
    usage: "راتب-اسبوعي"
}
