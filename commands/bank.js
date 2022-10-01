const sqlite = require("sqlite3");
const db = new sqlite.Database("DATA.DB");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("bank").setDescription("Your balance"),
    async execute(x) {
        db.get(db.prepare("SELECT balance FROM users WHERE name=?", x.user.username), function (err, rows) {
            if (err) {
                console.error(err.message)
            }
            const e = new EmbedBuilder()
            .setColor(0xa1ffc8)
            .setTitle("Bank")
            .setDescription(`Your balance: ${row[0]}`);
            x.reply({ embed: e });
        });
    }
};