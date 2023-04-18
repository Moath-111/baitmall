const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let gatewayLatency = Math.floor(client.ws.ping);
    message.channel.send("جاري التحميل...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new MessageEmbed()
            .setTitle("تـــم!")
            .addField("سرعة اتصال الرنامج", `${gatewayLatency}ms`, true)
            .addField("سرعة اتصال العميل", `${trip}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);
    });
}

exports.help = {
    name: "سرعة-الاتصال",
    aliases: ["البينق", "سرعة-الاتصال"],
    usage: `سرعة-الاتصال`
}
