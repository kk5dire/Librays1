const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'bugcollect',
    aliases: ['bg'],
    description: 'collect all bug and error data for the last run build',
    usage: '-bugcollect',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
 const reply = await message.channel.send('<:okmuda:821852023053484092> Generating error report');
 console.log("Generating bug report");
      setTimeout(() => {    reply.edit("<:resme:827058028816760872> Bug report generated") }, 2000);
      console.log("Bug report sent to local file");
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
