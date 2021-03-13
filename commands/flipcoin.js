const { MessageEmbed } = require("discord.js");
const commando = require('discord.js-commando');

module.exports = {
    name: "flipcoin",
    aliases: 'fc,flip',
    description: "Flip a Coin",
    execute(message, choices, output) {

    var choices = [
        "Heads",
        "Tails"
    ];

    var output = choices[Math.floor(Math.random()*choices.length)];
    message.channel.send(`You got **${output}!**`)
    }
}