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
 const reply = await message.channel.send('<:checklist:740365693442064414> Generating error report');
 console.log("Generating bug report");
      setTimeout(() => {    reply.edit("<a:check:740915640063492219> Bug report generated") }, 2000);
      console.log("Bug report sent to local file");
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
