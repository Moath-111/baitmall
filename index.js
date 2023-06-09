const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
const keepAlive = require("./server");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "راس-اموي" : {
    cost: 2000
  },
  "سيف-عادي" : {
    cost: 1000
  },
  "درع-حديد-عادي" : {
    cost: 3000
  }
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});

keepAlive();
client.login(process.env.token || process.env.TOKEN);