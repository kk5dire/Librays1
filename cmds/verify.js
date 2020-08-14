const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'verify',
    aliases: ['veri'],
    description: 'verify your user and enter the testing server, one time command (for new users)',
    usage: '-verify',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        var Channel = message.channel.name

if (message.content === "command") {
    if(Channel != "𝗲𝗻𝘁𝗿𝘆│🔌") {
        message.channel.send('Cannot use command here, ' + message.author);
    } else {
           try {
 
let role = message.guild.roles.cache.get("736595065040011296");
let member = message.member;


member.roles.add(role)
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , gave you the role(s)')
  message.author.send(embed);
 message.delete(1)
         
        // Insert command code here
    }
} catch (err) {
            console.log(err);
        }
    },
};
