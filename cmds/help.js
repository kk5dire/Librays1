const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'librarys',
    aliases: ['?', 'libs', 'lib'],
    description: 'Shows available commands or command info',
   usage: '[+print] [cmd]\n\n+print: Send to this channel instead of DM.',
    async execute(message, args) {
        try {
            //determine target by whether "+print" was added
            let target;
              if (args[0] == '+print') {
                args.shift();
                target = message.channel;
            } else {
                target = message.author;
            }
            
            const embed = new Discord.MessageEmbed();
            //if no command was given, show every command in a list
            if (!args.length) {
                const mapFunction = command => `\`${command.name}\`   ${command.description} ${command.nsfw ? '\\🔞 ' : ''}${command.ownerOnly ? '\\🔒 ' : ''}${command.image ? '\\🖼️ ' : ''}`;
                embed.setColor(0x7289DA)
                .setTitle('<:help:737449040652009542> Commands')
                .setDescription(message.client.commands.map(mapFunction).join('\n'))
                 .setFooter('hi i am iylibrarys the storage and moderation bot for the pepe planet dev server', 'https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-1c8ec529616b79e0-21x18.png');
            } else {
                //otherwise show info on one command
                const name = args[0].toLowerCase();
                const command = message.client.commands.get(name) ||
                    message.client.commands.find(c => c.aliases && c.aliases.includes(name));
                if (!command) throw "command not found";
                embed.setColor(0x7289DA)
            .setTitle(`:information_source:  Command ${command.name}`)
                .setDescription(`[Command source](https://github.com/kk5dire/iyBot-Librarys/tree/master/cmds/${command.name}.js)\`\`\`${command.description}\n`+
                (command.usage ? `   Usage: ${command.name} ${command.usage}\n` : `   Usage: ${command.name}\n`)+
                (command.aliases ? ` Aliases: ${command.aliases.join(', ')}\n` : '')+
                `Cooldown: ${command.cooldown || 2} sec\`\`\``)
                .setFooter(new Date().toISOString());
            }
            tools.sendEmbed(target, embed).then(() => {
                //if the user needs to check DMs, send a confirmation
                if (target == message.channel || message.channel.type == 'dm') return;
                 const embed = tools.makeEmbed(':incoming_envelope:   DM sent!', 'Use +print to send to this channel instead.');
                tools.sendEmbed(message.channel, embed);
            }).catch((error) => {
                throw `can't send DM, do you have DMs disabled?\n${error}`;
            });
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
