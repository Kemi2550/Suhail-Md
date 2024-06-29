const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347015274613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_12_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSDI5OEgvVFFTMFFMY3ZsNkVyQnhqZVFRNkNZY0xjNlhqckxoMUd1andBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTUyNzQ2MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkyQzNFQTdEODdENzFFMjUwM0Y4N0REOUFEQkUwNjkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTYzNzk3MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5TFVQWGtDNFNweTR0VDVmcTFOWEZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjliMmFmYzc0LTkxODYtNDU1OC1hM2I3LTk3NGM2NTFkOTRmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAyNTAsXG4gICAgICAyOSxcbiAgICAgIDI1MyxcbiAgICAgIDE2MCxcbiAgICAgIDEyNyxcbiAgICAgIDEzNyxcbiAgICAgIDE4MCxcbiAgICAgIDU3LFxuICAgICAgNzcsXG4gICAgICAxMDIsXG4gICAgICA5NSxcbiAgICAgIDE4LFxuICAgICAgMjMzLFxuICAgICAgMTkwLFxuICAgICAgMTgsXG4gICAgICAxMjIsXG4gICAgICAxNjAsXG4gICAgICAyMzAsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1NSxcbiAgICAgIDc3LFxuICAgICAgMTk5LFxuICAgICAgMzMsXG4gICAgICAyMzEsXG4gICAgICAzMCxcbiAgICAgIDIxOSxcbiAgICAgIDQ3LFxuICAgICAgNTksXG4gICAgICA0MSxcbiAgICAgIDg0LFxuICAgICAgMTMyLFxuICAgICAgMzAsXG4gICAgICA1NixcbiAgICAgIDE0NyxcbiAgICAgIDE4OSxcbiAgICAgIDE5MCxcbiAgICAgIDE0MSxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSlRUREVaQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNTI3NDYxMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRmF5byBLZW1pXCIsXG4gICAgXCJsaWRcIjogXCI2NDAyMTMzNjE2MjM5MzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDbDVFc1F5YS8rc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkFGbzBBZTdYdDRUSXBCWStvaGlHRGlSV2lmcWlmVlphQkVoUDRQUGNXdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJb0pnL2NFL3RScUFGRmd5L283KzlQRGZaK09Day91aVlvYUdqR3RtSy8yNUR5bFNiTzBFdTlueWZldjB0anZEckdUTWRqM1BuaU4rU2xmb1BXdFdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaNkM3K3RvS0NFZU5OUHAxUE9VS29LZHhrSU9tWE83Q2pONWFxenBrVzdqeG5HYVgxOUF1K29BbDIycyt0WjVMVUg1eHdJVDFYVnN1NGRvQ2FoRnlndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE1Mjc0NjEzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2Mzc5NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRdC5qc29uIjogIntcImtleURhdGFcIjpcIjhxd2JQMmxYYXJpREpSNHhHajVoTWVUeUpJM1U3Ny9mcHE0RlZVeU56cFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4OTI5NTg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2Mzc5NjkwNzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
