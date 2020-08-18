const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'welcome',
    aliases: ['wl'],
    description: 'send a targeted welcome message',
    usage: '-welcome @user',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    minArgs: 1,
    async execute(message, args) {
        try {
 let target
            if (args.length) {target = args.join(' ')}
            else {target = message.author;};
          
          const embed = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setTitle(`Welcome to the pepe planet development server, ${target}`)
        .setDescription(`This is the server where we will stress test the bots before we release them to the public`)
        .setFooter('Pepe planet Development');
        message.channel.send(embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
