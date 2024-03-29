/* const tools = require('../tools');

module.exports = {
    name: 'addemoji',
    aliases: ['addemote'],
    description: 'Adds an emoji to this server',
    usage: '[image attachment/url/@user] <name>',
    args: true,
    image: true,
    guildOnly: true,
    requires: 'MANAGE_EMOJIS',
    cooldown: 6,
    maxArgs: 2,
    async execute(message, args) {
        try {
            //last argument is the emoji's name
            const name = args[args.length - 1];

            //try to find an image from a link, attachment, mentioned user's avatar, last 10 messages, or your avatar
            let link = message.author.avatarURL({format: 'png'});
            const lastMsgs = await message.channel.messages.fetch(10);
            const attachmentMsg = lastMsgs.find((msg) => msg.attachments.size);
            if (attachmentMsg) link = attachmentMsg.attachments.first().url;
            if (message.mentions.users.size) link = message.mentions.users.first().avatarURL({ format: 'png' });
            if (message.attachments.size) link = message.attachments.first().url;
            if (args.length == 2 && !message.mentions.users.size) link = args[0];

            //create the emoji, send output when done
            message.guild.emojis.create(link, name).then((emoji) => {
                const embed = tools.makeEmbed(`${emoji} Success`, `added ${name}`);
                tools.sendEmbed(message.channel, embed);
            }).catch((error) => {
                return tools.errorMessage(message, err);
            });
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
*/