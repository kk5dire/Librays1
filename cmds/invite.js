 const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'invite',
    aliases: [ 'addbot', 'getbot'],
    description: 'Add GenMod to your server',
    usage: '',
    async execute(message, args) {
        try {
            const embed = new Discord.MessageEmbed()
            .setColor(0x7289DA)
            .setTitle(' Link')
            .setDescription("[Click me](https://discord.com/api/oauth2/authorize?client_id=843782098396381194&permissions=0&scope=bot)\n[Click me](https://kk5dire.github.io/Librays1/)")
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
