const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'giveaway',
    aliases: ['gaw'],
    description: 'adds/removes the giveaway manager role from the user',
    usage: '-giveaway',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
// assuming role.id is an actual ID of a valid role:
if(message.member.roles.cache.some('740106890024976407')) {
  console.log(`Yay, the author of the message has the role!`);
  let role = message.guild.roles.cache.get("740106890024976407");
let member = message.member;


member.roles.add(role)
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , gave you the role(s)')
  message.channel.send(embed);
   return;
} else {
  console.log(`Nope, noppers, nadda.`);
   let role = message.guild.roles.cache.get("740106890024976407");
let member = message.member;


member.roles.remove(role)
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , removed the role(s)')
  message.channel.send(embed);
}
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
