const tools = require('../tools');

module.exports = {
    name: 'eval',
    aliases: ['run', 'exec'],
    description: 'Run JavaScript code',
    usage: '<code ...>',
    args: true,
    ownerOnly: true,
    async execute(message, args) {
        try {
            const output = eval(args.join(' '));
           console.log(`evalulated javascript command line |  "${args}"`);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
