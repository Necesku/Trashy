const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Sends an embed")
    .addStringOption(option =>
        option.setName("title").setDescription("Title of an embed").setRequired(true),
    ).addStringOption(option =>
        option.setName("description").setDescription("Description of an embed"),
    ).addStringOption(option =>
        option.setName("color").setDescription("Color of an embed"),
    ),
    async execute(x) {
        const e = new EmbedBuilder()
        .setTitle(x.options.getString("title"))
        .setDescription(x.options.getString("description"))
        .setColor(x.options.getString("color") || "#2F3136");
        
        x.reply({ embeds: [e] });
    }
}