const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: '10',
    aliases: ['iyr-is-lesbian'],
    description: 'count to 10 testing message.edit',
    usage: '',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    cooldown: 10,
    async execute(message, args) {
        try {
message.channel.send(1).then((sentMessage) => sentMessage.edit(2)).then((sentMessage) => sentMessage.edit(3)).then((sentMessage) => sentMessage.edit(4)).then((sentMessage) => sentMessage.edit(5)).then((sentMessage) => sentMessage.edit(6)).then((sentMessage) => sentMessage.edit(7)).then((sentMessage) => sentMessage.edit(8)).then((sentMessage) => sentMessage.edit(9)).then((sentMessage) => sentMessage.edit(10)).then((sentMessage) => sentMessage.edit('Done!'));
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
