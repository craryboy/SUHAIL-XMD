const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697483360";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_01_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkpMSHRZNXFQOGlKZ2x5aHFBSE1wUlNaRHFkMm5xNmQrY3B3U3J6dDM0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT21RUWIzU1pSMkduWHZqNjRwbk40UVwiLFxuICBcInBob25lSWRcIjogXCIyMmQyNjgzNS1kNjI1LTQ1NTUtOTIwNy04ZTRmZTllMDMwZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNjksXG4gICAgICAyMzcsXG4gICAgICA3MyxcbiAgICAgIDExOCxcbiAgICAgIDIwOSxcbiAgICAgIDI1NSxcbiAgICAgIDgsXG4gICAgICAyNCxcbiAgICAgIDM5LFxuICAgICAgMTkzLFxuICAgICAgMTI5LFxuICAgICAgMjI5LFxuICAgICAgMTU4LFxuICAgICAgMTI4LFxuICAgICAgMjI3LFxuICAgICAgMzMsXG4gICAgICAxODQsXG4gICAgICA2OCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIyNCxcbiAgICAgIDc4LFxuICAgICAgMTcsXG4gICAgICA5MixcbiAgICAgIDMwLFxuICAgICAgNTMsXG4gICAgICAyMCxcbiAgICAgIDE0LFxuICAgICAgMTkyLFxuICAgICAgMjIzLFxuICAgICAgMTA3LFxuICAgICAgMTc0LFxuICAgICAgNTIsXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICAxNzcsXG4gICAgICAyNDMsXG4gICAgICAzLFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdLVlI1Rkc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTc0ODMzNjA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNDMxNTgyNTg4OTY1OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyOGw5SUZFS0tTcUxrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUFpTFZ2UGFNenlFdzg5Z0pjWGl6UjVaR1V0Z1lxblRLcTN1dzBsZnZXaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5SmFCRW9TVHpDaGxwTFB3T1FYTFNrWVAwc05WRUUzd3JnTTlYMS9zelNRb3p0OEhxUE1RaTkwOXVGcFR6NCs4TktJZlZ2VjNoUjB6Q3ovRy9PUkdDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnTllGbG5uQWsybGFMVHhUUktraXRCMUZ2N0pFMGo4UmYvanNPNE4xN09qTUcxcm16QjA3UWdmZEVDbmhkN2dXVU02ZEYwTXpCNXRCN0d2SnF5c1BpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTc0ODMzNjA6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk3NDgzMzYwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MDgxMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFERC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURELy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
