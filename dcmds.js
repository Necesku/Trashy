const { REST, Routes } = require("discord.js");
const { testGuildID, clientID } = require("./config.json");
const fs = require("node:fs");
const path = require("node:path");

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}; 

const rest = new REST({ version: "10" }).setToken(process.env.token);

async function register_dev() {
    await rest.put(Routes.applicationGuildCommands(clientID, testGuildID), { body: commands }).then(
        (data) => console.log(`✅ | Registered ${data.length} commands.`)
    ).catch(console.error());
};

async function register_global() {
    await rest.put(Routes.applicationCommands(clientID), { body: commands }).then(
        (data) => console.log(`✅ | Registered ${data.length} commands.`)
    ).catch(console.error());
};

if (process.argv.slice(2)[0] === "dev") {
    register_dev();
} else {
    register_global();
};