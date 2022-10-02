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
                resolve(row["balance"]);
            };
        });
    });
};

function addBalance(money, Integration) {
    getBalance(Integration).then(balance => {
        sql = db.prepare("UPDATE users SET balance=? WHERE name=? AND guild=?");
        sql.run([balance+money, Integration.user.username, Integration.guild.id], (err) => {
            if (!err) return true;
    });
    })
}

module.exports = { getBalance, addBalance };