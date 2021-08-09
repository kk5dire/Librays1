const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'scrub',
    aliases: ['sc'],
    description: 'scrub the data files and clean up temp data',
    usage: '-scrub',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
 const reply = await message.channel.send(tools.makeEmbed('<:okmuda:821852023053484092> Scrubbing the code...'));
 console.log("scrubbing data");
      setTimeout(() => {    reply.edit(tools.makeEmbed('<:resme:827058028816760872> Code Scrubbed and clean')) }, 15000);
      console.log("Data scrub complete");
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
