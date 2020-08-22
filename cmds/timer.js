const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'timer',
    aliases: ['t'],
    description: 'create a timer for the set ammount of time',
    usage: '-timer 10s',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
 const reply = await message.channel.send(':AYS_info:  Timer set!');
      setTimeout(() => {    reply.edit(":alarm_clock: The Timer is up")
      message.author.send('your timer is up!') }, args);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
