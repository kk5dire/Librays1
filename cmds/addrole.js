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
            if (args[0] == '+1') {
              args.shift();
              target = '842174512690888705';
          } else if (args[0] == '+2') {
              target = '842174512690888705';
          } else if (args[0] == '+3') {
              target = '842174512690888705'
          } else if (args[0] == '+4') {
              target = '842174512690888705'
          } else {
          
              return
          }
        
        // assuming role.id is an actual ID of a valid role:
        if (target === undefined) throw message.channel.send(tools.errorMessage('Undefined Paramters'));
        if(message.member.roles.cache.has(target)) { // crew role
            console.log(`Yay, the author of the message has the role!`);
          let role = message.guild.roles.cache.get(target); // access role
          let member = message.member;
           member.roles.remove(role.id)
          const embed = tools.makeEmbed('<:fire2020:812013976116002826> success! , removed the role(s)')
          message.author.send(embed);
          
       
        
          
         
           return;
          } else {
            console.log(`Nope, noppers, nadda.`);
          let role = message.guild.roles.cache.get(target); // access role
          let member = message.member;
           member.roles.add(role.id)
          const embed = tools.makeEmbed('<:fire2020:812013976116002826> success! , gave you the role(s)')
          message.author.send(embed);
       
          
         
          } 
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
