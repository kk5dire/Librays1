const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'sources',
    aliases: ["source", "sc"],
    description: 'Shows some data about the sources used for the bot',
    usage: '-sources',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
        const sources = new Discord.MessageEmbed()
        .setAuthor("GenMod Sources")
        .setTitle("Sources used in the project")
        .addField("Framework", "GTRXAC [Visit His Github](http://gtrxac.github.io/)", true)
        .addField("Licencing", "GNU [Open](https://github.com/kk5dire/Librays1/blob/master/LICENSE)", true)
        .addField("Language Helpers", "[DJS](http://discordjs.guide/)", true)
        .addField("la2 Members", "[Invite](https://kk5.page.link/la2", true)
        .addField("Other", "Refusal to mention", true)
        .setTimestamp()
        .setFooter("Missing something? let me know!")
        tools.sendEmbed(message.channel, sources)
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
