const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'about',
    aliases: ["info", "aboutme"],
    description: 'Shows some info about the bot',
    usage: '-about',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
        const sources = new Discord.MessageEmbed()
        .setAuthor("Story time")
        .setTitle("About GenMod")
        .addField("Starting out", "So the use of this bot dates back a bit It was made as a development project for a now active and much more popular bot that I will refuse to mention as will be explained later", false)
        .addField("In practice", "The bot was very well recived and used often and more or less used as a test run for bots that would follow it and some that are still used to this day.", false)
        .addField("Switching Trains", "While times got tough during development the bot switched focus to be more on a playground for things while we got the main stuff set up and working", false)
        .addField("Falling out", "The other developers who worked on the bot and I had a bit of a 'argument' and we have decided not to work together let alone contact eachother on future endevors and seince have not done any work for them.", false)
        .addField("In sickness", "So why is this bot still here, Well I still sometimes use it as a playground to mess with and what not but Its also here for the history and memorys of which. A note to be made is that the code for this bot was written in djs11 which is much outdated now as this bot dates a while back and may cause fatal issues and my code can be bad sometimes comparing dont @ me.", false)
        .setTimestamp()
        .setFooter("thanks for reading, Issues contact@anotherkk5dire.web.app")
        tools.sendEmbed(message.channel, sources)
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
