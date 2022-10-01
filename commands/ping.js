const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong"),
    async execute(x) {
        const e = new EmbedBuilder()
        .setColor(0xa1ffc8)
        .setTitle("Ping")
        .setDescription(`🏓 Latency: ${Date.now() - x.createdTimestamp}ms`);
        await x.reply({ embeds: [e] });
    }
}