const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'vtest',
    aliases: ['v'],
    description: 'data',
    usage: '-v',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
      
 var ChannelID = message.channel.id

    if(ChannelID != "736595341847298158") {
        message.channel.send('Cannot use command here, ' + message.author);
    } else {

let role = message.guild.roles.cache.get("743407521301135371");
let member = message.member;
  const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , gave you the role(s)')
  message.author.send(embed);
 message.delete(1)
  
    }
         

        } catch (err) {
            console.log(err);
        }
    },
};
