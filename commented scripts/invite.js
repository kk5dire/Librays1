/* const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'invite',
    aliases: ['support', 'addbot', 'getbot'],
    description: 'Add gtrxBot² to your server or join the support server',
    usage: '',
    async execute(message, args) {
        try {
            const embed = new Discord.MessageEmbed()
            .setColor(0x7289DA)
            .setTitle(':mega: Links')
            .setDescription(
           ` Servers: ${client.guilds.cache.size}/${client.users.cache.size} : Members watching` 
            .setFooter(new Date().toISOString()));
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
*/