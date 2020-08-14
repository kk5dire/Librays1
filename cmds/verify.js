const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'verify',
    aliases: ['veri'],
    description: 'verify your user and enter the testing server',
    usage: '-ver',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
 
let role = message.guild.roles.get("736595065040011296");
let member = message.member;

//adds the role
member.roles.add(role)

        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
