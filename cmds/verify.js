const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'verify',
    aliases: ['veri'],
    description: 'verify your user and enter the testing server, one time command (for new users)',
    usage: '-ver',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
 
let role = message.guild.roles.cache.get("736595065040011296");
let member = message.member;


member.roles.add(role)
  message.author.send("<:AYS_check:737449100009799752> success , gave you the role!");
 message.delete(1)
         

        } catch (err) {
            console.log(err);
        }
    },
};
