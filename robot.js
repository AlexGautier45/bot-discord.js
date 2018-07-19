// Obligatoire : importer Discord.
const Discord = require("discord.js");
const client = new Discord.Client();

// Variables :
var prefixe = "::"

// Au lancement :
client.on("ready", () => {
  console.log("Prêt !") // Prêt !
}

// A un message :
client.on("message", msg => {
  if(msg.content.startsWith(prefixe+"eval ") && admins.includes(msg.author.id)) {
    eval(msg.content.replace(prefixe+"eval"))
  }
