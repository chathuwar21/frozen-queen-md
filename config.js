const fs = require("fs");
const os = require("os");

if (fs.existsSync("config.env")) {
  require("dotenv").config({ path: "./config.env" });
}

// Function to get Sri Lankan date in YYYY-MM-DD format
function getSriLankanDate() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return now.toLocaleDateString("en-CA", { timeZone: "Asia/Colombo" }); // en-CA gives YYYY-MM-DD format
}

// Function to get Sri Lankan time in HH:MM:SS format
function getSriLankanTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };
  return now.toLocaleTimeString("en-US", options);
}

// Function to calculate uptime in hh:mm:ss format
function getUptime() {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to get RAM usage
function getRAMUsage() {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  return `${(usedMem / 1024 / 1024 / 1024).toFixed(2)}GB / ${(totalMem / 1024 / 1024 / 1024).toFixed(2)}GB`;
}

// Function to calculate bot speed in milliseconds
function getBotSpeed() {
  const minSpeed = 100; // Minimum speed in ms
  const maxSpeed = 500; // Maximum speed in ms
  const speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
  return `${speed}ms`; // Return speed in milliseconds
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "MYRwkJoI#lkQ4RPKEG6LkP20VjHOmiafIEms_D_ryhJkIZdh9jN0"
  OWNER_NUM: process.env.OWNER_NUM || "94702560019",
  PREFIX: process.env.PREFIX || ".",
  ROYAL_NAME: process.env.ROYAL_NAME || "Frozen Queen", // Add ROYAL_NAME to environment variables
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/chathurahansaka1/help/main/src/cdbe3771-c89d-4ee9-a7d6-254d0c321c8a.jpg",
  ALIVE_MSG: `
╭────༺❄️༻────╮
   ༺ FROZEN-QUEEN-MD ༻
   ༺❅ THE ROYAL ICE KINGDOM ❅༻
╰────༺❄️༻────╮
╔══════ஓ๑❄️๑ஓ══════╗
     ✧･ﾟ: *✧･ﾟ:* BOT STATUS *:･ﾟ✧*:･ﾟ✧
╚══════ஓ๑❄️๑ஓ══════╝
┊ ༄ᶦᶰᶠᵒ❆ 👑 Royal Name: ${process.env.ROYAL_NAME || "Frozen Queen"}
┊ ༄ᶦᶰᶠᵒ❆ 📞 Royal Contact: +${process.env.OWNER_NUM || "94713670127"}
  ┈┈┈┈┈┈༻❄️༺┈┈┈┈┈┈
╔══•ೋ❅ SYSTEM INFO ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ 🖥️ Platform: ${os.platform()}
┊ ༄ᶦᶰᶠᵒ❆ 💾 RAM: ${getRAMUsage()}
┊ ༄ᶦᶰᶠᵒ❆ ⚡ CPU: ${(os.loadavg()[0] * 100 / os.cpus().length).toFixed(2)}%
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ TIME INFO ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ⏰ Time: ${getSriLankanTime()}
┊ ༄ᶦᶰᶠᵒ❆ 📅 Date: ${getSriLankanDate()}
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ BOT STATS ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ⏳ Runtime: ${getUptime()}
┊ ༄ᶦᶰᶠᵒ❆ 🚀 Speed: ${getBotSpeed()}
┊ ༄ᶦᶰᶠᵒ❆ ✅ Status: Active
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ COMMANDS ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .alive ➢ Check bot status
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .help ➢ View all commands
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .sticker ➢ Create ice stickers
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .ai ➢ Summon ice intelligence
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .play ➢ Frozen melodies
╚══════༺❅❄️❅༻══════╝
  ┈┈┈┈┈┈༻❄️༺┈┈┈┈┈┈
     ✧･ﾟ: *✧･ﾟ:* THE COLD NEVER BOTHERED ME ANYWAY *:･ﾟ✧*:･ﾟ✧
`,
  REACTION: "❄️", // Add a reaction emoji
};
