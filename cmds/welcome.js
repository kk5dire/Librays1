const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'welcome',
    aliases: ['wl'],
    description: 'send a targeted welcome message',
    usage: '-welcome @user',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
 let target
            if (args.length) {target = args.join(' ')}
            else {target = message.author;};
          
          const embed = new Discord.MessageEmbed()
        .setColor(0x7289DA)
        .setTitle(`Welcome to the pepe planet development server`)
        .setDescription(`Welcome ${target}! This is the server where we will stress test the bots before we release them to the public`)
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/waving-hand-sign_1f44b.png')
        .setFooter('Pepe planet Development');
        message.channel.send(embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
