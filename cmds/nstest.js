const Discord = require('discord.js');
const tools = require('../tools');
const cheerio = require('cheerio');
const request = require('request');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports = {
    name: 'img',
    aliases: ['img'],
    description: 'img',
    usage: 'img',
    nsfw: true,
    image: true,
    args: true,
    async execute(message, args) {
        try {
            https.get(url, (result) => {
                var body = ''
                result.on('data', (chunk) => {
                    body += chunk
                })
    
                result.on('end', () => {
                    var response = JSON.parse(body)
                    var index = response.data.children[Math.floor(Math.random() * 99) + 1].data
    
                    if (index.post_hint !== 'image') {
    
                        var text = index.selftext
                        const textembed = new Discord.MessageEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
    
                    var image = index.preview.images[0].source.url
                    var title = index.title
                    var link = 'https://reddit.com' + index.permalink
                    var subRedditName = index.subreddit_name_prefixed
    
                    if (index.post_hint !== 'image') {
                        const textembed = new Discord.RichEmbed()
                            .setTitle(subRedditName)
                            .setColor(9384170)
                            .setDescription(`[${title}](${link})\n\n${text}`)
                            .setURL(`https://reddit.com/${subRedditName}`)
    
                        message.channel.send(textembed)
                    }
                    console.log(image);
                    const imageembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setImage(image)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})`)
                        .setURL(`https://reddit.com/${subRedditName}`)
                    message.channel.send(imageembed)
                }).on('error', function (e) {
                    console.log('Got an error: ', e)
                })
            })
            
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
