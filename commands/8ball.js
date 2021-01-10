const { MessageEmbed } = require("discord.js");
const commando = require('discord.js-commando');

module.exports = {
    name: "8ball",
    aliases: ["8b"],
    description: "8ball",
    execute(message, choices, output) {

    var choices = [
        'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        `Don't count on it.`,
        `It is certain.`,
        `It is decidedly so.`,
        `Most likely.`,
        `My reply is no.`,
        `My sources say no.`,
        `Outlook not so good.`,
        `Outlook good.`,
        `Reply hazy, try again.`,
        `Signs point to yes.`,
        `Very doubtful.`,
        `Without a doubt.`,
        `Yes.`,
        `Yes - definitely.`,
        `You may rely on it.`
    ];

    var output = choices[Math.floor(Math.random()*choices.length)];
    message.channel.send(`**${output}**`)
    }
}