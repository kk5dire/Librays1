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
 
let role = <734545562166231070>.roles.cache.find(r => r.name === "testbot");
let member = message.member;

//adds the role
member.roles.add(role)

        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
