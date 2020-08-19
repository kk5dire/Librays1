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
        .setDescription(`<:AYS_info:737448988437118977> The Bot is currently restarting , stand by`)
   member.send(embed);
    console.log(`restating the bot via/cmd`);
process.exit();
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
