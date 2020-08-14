const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'giveaway',
    aliases: ['gw'],
    description: 'adds/removes the giveaway manager role from the user',
    usage: '-giveaway',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
               let role = message.guild.roles.cache.find("740106890024976407");
let member = message.member;
// assuming role.id is an actual ID of a valid role:
if(message.member.roles.cache.some('740106890024976407')) {
  console.log(`Yay, the author of the message has the role!`);

member.roles.remove(role)
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , removed the role(s)')
  message.channel.send(embed);



} else {
  console.log(`Nope, noppers, nadda.`);
member.roles.add(role)
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , gave you the role(s)')
  message.channel.send(embed);
   return;


}
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
