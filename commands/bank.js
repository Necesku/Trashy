const { getBalance } = require("./utils/getBalance");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("bank").setDescription("Shows your balance."),
    async execute(x) {
        getBalance(x).then(balance => {
            const e = new EmbedBuilder()
            .setColor(0xa1ffc8)
            .setTitle("Bank")
            .setDescription(`Your balance: ${balance}`);
            x.reply({ embeds: [e] });
        });
    }
};