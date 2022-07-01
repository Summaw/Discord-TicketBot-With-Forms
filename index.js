const { Client } = require("discord.js");
const { token, guildId } = require("./settings");

const client = new Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});

client.on("ready", async () => {
  console.log(`${client.user.username} is Online`);
  let guild = client.guilds.cache.get(guildId);
  if (guild) {
    await guild.commands.set([
      {
        name: "ping",
        description: `test ping of bot`,
        type: "CHAT_INPUT",
      },
      {
        name: "setup",
        description: `setup ticket system`,
        type: "CHAT_INPUT",
      },
    ]);
  }

  require("./ticketsystem")(client);
});

client.login(token);
