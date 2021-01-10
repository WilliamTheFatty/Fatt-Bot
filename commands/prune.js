const { MessageEmbed } = require("discord.js");
require('core-js/stable');

module.exports = {
    name: "prune",
    description: "Delete Messages",
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('That doesn\'t seem to be a valid number.');
        } else if (amount < 2 || amount > 100) {
            return message.reply('You need to input a number between 2 and 100.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to prune messages in this channel!');
        });
    }
}