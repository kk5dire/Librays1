const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'bio',
    aliases: ["profile"],
    description: '',
    usage: '-bio',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
    .setTitle('Bio overflow')
    .setDescription("This bot is maintained by ***kk5dire*** for more info open my profile\n'-help' for docs "-sources" for sources '-about' for the bots history\nhttps://anotherkk5dire.web.app \ncontact@anotherkk5dire.web.app for issues\n Used in with: *https://kk5.page.link/la4* \nThis bot contains outdated code using discord.js 11 and may contain bugs use the above link to report crashes and bugs")
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
