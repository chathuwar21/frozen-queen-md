const fs = require("fs");
const os = require("os");

if (fs.existsSync("config.env")) {
  require("dotenv").config({ path: "./config.env" });
}

// Function to get Sri Lankan date and time separately
function getSriLankanTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };

  // Format date as YYYY-MM-DD
  const date = now.toLocaleDateString("en-US", { timeZone: "Asia/Colombo", year: "numeric", month: "2-digit", day: "2-digit" });
  // Format time as HH:MM:SS
  const time = now.toLocaleTimeString("en-US", { timeZone: "Asia/Colombo", hour12: false });

  return { date, time };
}

// Function to calculate uptime in milliseconds
function getUptime() {
  const uptime = process.uptime() * 1000; // Convert seconds to milliseconds
  return `${Math.floor(uptime)}ms`;
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
  SESSION_ID: process.env.SESSION_ID || "tQ5WlbKR#fqJuGFSO5ckE5-lXsd68qG1W6r_CeKvZF5tYFoXDI-I",
  OWNER_NUM: process.env.OWNER_NUM || "94713670127",
  PREFIX: process.env.PREFIX || ".",
  ROYAL_NAME: process.env.ROYAL_NAME || "Queen Elsa", // Add ROYAL_NAME to environment variables
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/chathurahansaka1/help/main/src/cdbe3771-c89d-4ee9-a7d6-254d0c321c8a.jpg",
  ALIVE_MSG: `
╭────༺❄️༻────╮
   ༺ FROZEN-QUEEN-MD ༻
   ༺❅ THE ROYAL ICE KINGDOM ❅༻
╰────༺❄️༻────╮
╔══════ஓ๑❄️๑ஓ══════╗
     ✧･ﾟ: *✧･ﾟ:* BOT STATUS *:･ﾟ✧*:･ﾟ✧
╚══════ஓ๑❄️๑ஓ══════╝
┊ ༄ᶦᶰᶠᵒ❆ 👑 Royal Name: ${process.env.ROYAL_NAME || "Queen Elsa"}
┊ ༄ᶦᶰᶠᵒ❆ 📞 Royal Contact: +${process.env.OWNER_NUM || "94713670127"}
  ┈┈┈┈┈┈༻❄️༺┈┈┈┈┈┈
╔══•ೋ❅ SYSTEM INFO ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ 🖥️ Platform: ${os.platform()}
┊ ༄ᶦᶰᶠᵒ❆ 💾 RAM: ${getRAMUsage()}
┊ ༄ᶦᶰᶠᵒ❆ ⚡ CPU: ${(os.loadavg()[0] * 100 / os.cpus().length).toFixed(2)}%
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ TIME INFO ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ⏰ Time: ${getSriLankanTime().time}
┊ ༄ᶦᶰᶠᵒ❆ 📅 Date: ${getSriLankanTime().date}
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ BOT STATS ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ⏳ Runtime: ${getUptime()}
┊ ༄ᶦᶰᶠᵒ❆ 🚀 Speed: ${getBotSpeed()}
┊ ༄ᶦᶰᶠᵒ❆ ✅ Status: Active
╚══════༺❅❄️❅༻══════╝
╔══•ೋ❅ COMMANDS ❅ೋ•══╗
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .alive ➢ Check bot status
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .help ➢ View all help commands
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .sticker ➢ Create ice stickers
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .aim ➢ view ai menu
┊ ༄ᶦᶰᶠᵒ❆ ❄️ .play ➢ Frozen melodies
╚══════༺❅❄️❅༻══════╝
  ┈┈┈┈┈┈༻❄️༺┈┈┈┈┈┈
     ✧･ﾟ: *✧･ﾟ:* THE COLD NEVER BOTHERED ME ANYWAY *:･ﾟ✧*:･ﾟ✧
`,
  
};
