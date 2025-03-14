const {cmd , commands} = require('../command')
const config = require ('../config');
cmd({
    pattern: "alive",
    alias:["queen"],
    react:"❄️",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{  
     await robin.sendPresenceUpdate('recording', from);
     await robin.sendMessage(from, { audio: { url: "https://github.com/chathurahansaka1/help/raw/refs/heads/main/audio/WhatsApp%20Audio%202025-03-12%20at%2010.43.34%20AM.mp4" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
      await robin.sendMessage(from,{sticker: { url :"https://github.com/chathurahansaka1/help/raw/refs/heads/main/sticker/cebf62bc-2fe8-444d-9416-282ccaf826c2.webp"},package: '❄️Frozen Queen❄️'},{ quoted: mek }) 
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

