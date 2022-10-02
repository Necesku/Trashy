const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("about").setDescription("About me."),
    async execute(x) {
        const e = new EmbedBuilder()
        .setColor(0xa1ffc8)
        .setTitle("About")
        .addFields(
            { name: "What is that", value: "It's a trash bot written in Discord.js", inline: true },
            { name: "Version", value: "1.0.0", inline: true },
            { name: "I want invite that!", value: "https://discord.com/api/oauth2/authorize?client_id=1025707737851625524&permissions=8&scope=bot%20applications.commands"}
        )
        x.reply({ embeds: [e] });
    }
};