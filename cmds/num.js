const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'numberrand',
    aliases: ['num'],
    description: 'returns a random number from 1 to the number provided',
    usage: 'number',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    cooldown: 2,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
            const rand = Math.floor(Math.random() * args) + 1
            const embedm = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setTitle('embed_title_demo')
        .setDescription(`<a:ComfySip:749200034846736394> ${message.author.username} I choose... ${rand}`)
        .setFooter('https://dsc.bio/kk5dire');
   message.channel.send(embedm);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
