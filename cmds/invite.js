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
            .setDescription("[Home invite \(Recommended\)](https://discord.com/api/oauth2/authorize?client_id=843782098396381194&permissions=0&redirect_uri=https%3A%2F%2Fkk5dire.github.io%2FLibrays1%2Fconfirm&response_type=code&scope=identify%20bot)\n[External Invite](https://kk5dire.github.io/Librays1/invite)")
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
