const sqlite = require("sqlite3");
const db = new sqlite.Database("DATA.DB");

function getBalance(Integration) {
    return new Promise((resolve, reject) => {
        sql = db.prepare("SELECT balance FROM users WHERE name=? AND guild=?");
        sql.get([Integration.user.username, Integration.guild.id], (err, row) => {
            if (row === undefined) {
                sql = db.prepare("INSERT INTO users (name, balance, guild) VALUES (?, ?, ?)");
                sql.run([Integration.user.username, 0, Integration.guild.id]);
            } else {
                resolve(row["balance"])
            };
        });
    });
};

module.exports = { getBalance };