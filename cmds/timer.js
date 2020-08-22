const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'timer',
    aliases: ['t'],
    description: 'create a timer for the set ammount of time (in ms)',
    usage: '-timer 60000',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
 const reply = await message.channel.send(tools.makeEmbed('<:AYS_info:737448988437118977>  Timer set!'));
      setTimeout(() => {    reply.edit(tools.makeEmbed(':alarm_clock: The Timer is up'))
      message.channel.send(`${message.author} your timer for \`${args}ms\` is up!`) }, args);
      message.author.send(`The timer you set for \`${args}ms\` is up!`);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
