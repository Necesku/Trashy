const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { random } = require("./utils/random");
const { addBalance } = require("./utils/balanceUtils");

module.exports = {
    data: new SlashCommandBuilder().setName("work").setDescription("You need job, right?"),
    async execute(x) {
        random(1, 3).then(money => {
            addBalance(money, x);
            const e = new EmbedBuilder()
            .setColor(0xa1ffc8)
            .setTitle("Work")
            .setDescription(`You collected ${money}`);
            x.reply({ embeds: [e] });
        });
    }
};