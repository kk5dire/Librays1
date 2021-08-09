const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'timer',
    aliases: ['t'],
    description: 'create a timer for the set ammount of time (in ms) \n ⚠️ !!WARNING!! ⚠️ \n This will reset if any update or restart happens while the timer is running',
    usage: '-timer (time in ms)',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
 const reply = await message.channel.send(tools.makeEmbed('<:okmuda:821852023053484092>  Timer set!'));
            console.log(`a timer has been started for ${args} by ${message.author}`);
      setTimeout(() => {    reply.edit(tools.makeEmbed('<:resme:827058028816760872> The Timer is up'))
      message.channel.send(`${message.author} your timer for \`${args} ms\` is up!`)
                         console.log(`the timer set by ${message.author} for ${args} is up`);
      message.author.send(`The timer you set for \`${args} ms\` is up!`) }, args);
           
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
