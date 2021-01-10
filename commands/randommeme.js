const { prefix } = require('../config.json');
const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    name: 'randommeme',
    description: 'Returns a random meme',
    guildOnly: true,
    args: true,
    aliases: 'rand,rimg,image,rimage',
    usage: 'Sends a random image of the given search you specify!',
    cooldown: 1,
    async execute(message, args) {
        srch = args.join(' ');
        image(message);
    }
}
function image(message){
    var options = {
        url: 'https://api.imgflip.com/get_memes',
        method: 'GET',
    };

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const meme = JSON.parse(body);
                    const random = (Math.floor(Math.random() * Math.floor(100)));
                    message.channel.send(meme.data.memes[random].url);
                }
            });
        }
