const tools = require('../tools');

module.exports = {
    name: 'kill',
    description: 'Kills the specified user in a random way',
    usage: '[text or @user]',
    async execute(message, args) {
        try {
            //use the given text as the target, or your mention if nothing was given
            let target;
            if (args.length) {target = args.join(' ')}
            else {target = message.author;};

            //select a random message from the list...
            const messages = [
                `${target} \`kill message 1\``,
                `${target} \`kill message 2\``,
                `${target} \`kill message 3\``,
                `${target} \`kill message 4\``,
                `${target} \`kill message 5\``,
                `${target} \`kill message 6\``,
                `${target} \`kill message 7\``,
                `${target} \`kill message 8\``,
                `${target} \`kill message 9\``,
                `${target} \`kill message 10\``,
                `${target} \`kill message 11\``,
                `${target} \`kill message 12\``
                //add your own messages here or suggest them: https://discord.gg/bRTPbpg
            ]
            const killMsg = messages[Math.floor(Math.random() * messages.length)];

            //create an embed for the kill message
            const embed = tools.makeEmbed('', '')
            .setDescription(killMsg);
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
