/*const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'sayemoji',
    aliases: ['sayemote', 'nitro'],
    description: 'Sends all the specified emoji',
    usage: '[-s] <emoji ...>\n\n-s: Send as a look-alike of your user',
    args: true,
    cooldown: 3,
    async execute(message, args) {
        try {
            //if -s was added, create a webhook and send as that instead
            let target;
            if (args[0] === '-s') {
                if (message.channel.type == 'text') {
                    args.shift();
                    target = await message.channel.createWebhook(message.author.username, message.author.avatarURL({format: 'png'}));
                } else {
                    throw 'cannot use webhooks in a DM';
                }
            } else {
                target = message.channel;
            }
            let output = '';

            //loop through every emoji and add it to the output, or warn if emoji not found
            args.forEach((emojiName) => {
                const emoji = message.client.emojis.cache.find((e) => {e.name == emojiName});
                if (emoji) {
                    output = `${output} ${emoji}`;
                } else {
                    message.channel.send(`${emojiName} not found.`);
                };
            });

            //send the output
            target.send(output).catch((error) => {
                return tools.errorMessage(message, error);
            });

            //clean up webhook if it was used
            if (target instanceof Discord.Webhook) target.delete();
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
*/