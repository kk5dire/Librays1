const Discord = require('discord.js');
const tools = require('../tools');
const client = new Discord.Client();

module.exports = {
    name: 'eping',
    aliases: ['epong'],
    description: "Check the connection ping to Discord's servers edit",
    cooldown: 5,
    async execute(message, args) {
        try {
            const messageSendStart = Number(new Date());
            const reply = await message.channel.send(":alarm_clock:   Checking ping... `starting`")
            const messageSendPing = Number(new Date()) - messageSendStart;

            const messageEditStart = Number(new Date());
            await reply.edit(":alarm_clock:   Checking ping... ")
            const messageEditPing = Number(new Date()) - messageEditStart;

            reply.edit(":alarm_clock:  > Checking ping... ")
            const messageReactStart = Number(new Date());
            await reply.react('✅')
            const messageReactPing = Number(new Date()) - messageReactStart;
            reply.edit(":alarm_clock:  > Checking ping... `Collecting Data`")
            const messageDeleteStart = Number(new Date());
             reply.edit(":alarm_clock:  > Checking ping... `almost done`")
            await reply.delete();
            const messageDeletePing = Number(new Date()) - messageDeleteStart;
            const websocketPing = Math.round(client.ping)
            const embed = tools.makeEmbed(':alarm_clock:   Ping statisitics', ` Edit: ${messageEditPing} ms\n` , null, message.channel );
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
