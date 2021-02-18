const Discord = require('discord.js');
const tools = require('../tools');
const cheerio = require('cheerio');
const request = require('request');

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
            function image(msg) {

                var options = {
                    url: "http://results.dogpile.com/serp?qc=images&q=" + "Cute Cat Images",
                    method: "GET",
                    headers: {
                        "Accept": "text/html",
                        "User-Agent": "Chrome"
                    }
                };
            
                request(options, function (error, response, responseBody) {
                    if (error) {
                        return;
                    }
            
                    $ = cheerio.load(responseBody);
            
            
                    var links = $(".image a.link");
            
                    var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            
                    console.log(urls);
                    if (!urls.length) {
            
                        return;
            
                    }
            
                    //send request
                    msg.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            
                });
            }
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
