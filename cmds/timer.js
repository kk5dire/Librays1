const Discord = require('discord.js');
const tools = require('../tools');
//create a client, the bot itself
const client = new Discord.Client();
module.exports = {
    name: 'timer',
    aliases: [],
    description: 'create a timer that edits in the set amount of time (in seconds)',
    usage: '-timer 10s',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    requires: '',
    cooldown: 0,
    minArgs: 1,
    maxArgs: 2,
    async execute(message, args) {
        try {
            let msg;
            client.on("message", async message => {
              // Send message & Store reference to the message
              msg = await message.channel.send(`:timer: | Timer for **${args}**`);
              setTimeout(() => {
                // Edit msg 20 seconds later
                msg.edit(':alarm_clock: | ***`This timer is up`***');
              }, args);
            });
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
