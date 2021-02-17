const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'role',
    aliases: ['r'],
    description: 'command_placeholder',
    usage: '-command_handle',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
       async execute(message, args) {
        try {
            let target;
            if (args[0] == '+lib') {
              args.shift();
              target = '811581317882970172';
          } else if (args[0] == '+no') {
              target = '811581261893468190';
          } else {
              return;
          }
        
        // assuming role.id is an actual ID of a valid role:
        if (target === undefined) throw message.channel.send(tools.errorMessage('Undefined Paramters'));
        if(message.member.roles.cache.has(target)) { // crew role
            console.log(`Yay, the author of the message has the role!`);
          let role = message.guild.roles.cache.get(target); // access role
          let member = message.member;
           member.roles.remove(role.id)
          const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , removed the role(s)')
          message.author.send(embed);
          embed.delete({timeout: 200000});
          message.channel.bulkDelete(1)({timeout: 200000})
        
          
         
           return;
          } else {
            console.log(`Nope, noppers, nadda.`);
          let role = message.guild.roles.cache.get(target); // access role
          let member = message.member;
           member.roles.add(role.id)
          const embed = tools.makeEmbed('<:AYS_check:737449100009799752> success! , gave you the role(s)')
          message.author.send(embed);
          embed.delete({timeout: 200000});
          message.channel.bulkDelete(1)({timeout: 200000})
          
         
          } 
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
