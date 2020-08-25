const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'remind',
    aliases: ['t'],
    description: 'create a reminder for the set ammount of time (in ms) \n ⚠️ !!WARNING!! ⚠️ \n This will reset if any update or restart happens while the timer is running',
    usage: '-remind (time in ms) (reminder)',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    minArgs: 2,
    maxArgs: 2,
    async execute(message, args) {
        try {
 const reply = await message.channel.send(tools.makeEmbed('<:AYS_info:737448988437118977>  Timer set!'));
            console.log(`a remind has been started for ${args} by ${message.author}`);
      setTimeout(() => {    reply.edit(tools.makeEmbed('<a:timerend:747784369778851921> The Timer is up'))
      message.channel.send(`${message.author} your timer for \`${args} ms\` is up! ${args[1]}`)
        console.log(`the remind set by ${message.author} for ${args} is up`);
      message.author.send(`The timer you set for \`${args} ms\` is up!`) }, args[0]);
          
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
