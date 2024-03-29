const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'restart',
    aliases: ['-'],
    description: 'restart the bot',
    usage: '-restart',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
            const embed = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setTitle(`Restarting`)
        .setDescription(`<:okmuda:821852023053484092> The Bot is currently restarting , stand by`)
   message.channel.send(embed);
    console.log(`restating the bot via/cmd`);
            setTimeout(() => {  process.exit(); }, 1000);

        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
