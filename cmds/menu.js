const Discord = require('discord.js');
const tools = require('../tools');
const { Client, MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

module.exports = {
    name: 'menu',
    aliases: ['mn'],
    description: 'create a demo menu',
    usage: '-menu',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
  new Menu(message.channel, message.author.id, [
            {
                name: "main",
                content: new MessageEmbed({
                    title: "Help",
                    description: "Commands list:",
                    fields: [
                        {
                            name: "command1",
                            value: "this command does stuff"
                        }
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "▶": "next",
                    "⚙": "otherPage"
                }
            },
            {
                name: "otherPage",
                content: new MessageEmbed({
                    title: "More Help!",
                    description: "Here are some more commands!",
                    fields: [
                        {
                            name: "You get the idea.",
                            value: "You can create as many of these pages as you like."
                            // (Each page can only have 20 reactions, though. Discord's fault.)
                        }
                    ]
                }),
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
                    "1️⃣": "first"
                }
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
