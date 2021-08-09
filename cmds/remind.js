const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'remind',
    aliases: ['tr'],
    description: 'create a reminder for the set ammount of time (in ms) \n ⚠️ !!WARNING!! ⚠️ \n This will reset if any update or restart happens while the reminder is running',
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
 const reply = await message.channel.send(tools.makeEmbed('<:okmuda:821852023053484092>  Reminder set!'));
            console.log(`a remind has been started for ${args[0]} by ${message.author} with the message ${args[1]} `);
      setTimeout(() => {    reply.edit(tools.makeEmbed('<:resme:827058028816760872> The Reminder is up'))
      message.channel.send(`${message.author} i was told to remind you about \`${args[1]}\` \`${args[0]}\`ms ago`)
        console.log(`the remind set by ${message.author} for \`${args}\` is up with the message \`${args[1]}\``);
      message.author.send(`You told me to remind you for ${args[1]}  ${args[0]}ms ago`) }, args[0]);
          
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
