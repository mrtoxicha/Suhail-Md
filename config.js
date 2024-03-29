const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Zimbabwe,Harare."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "263719455720" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263 77 427 6252";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_03_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEMraytsc0ZRcXBrV3UvaU4yeWFaTWVkYXNvZmUwNzJLTGJPOS9ock1XST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1YcndQbllERWJReGlkY0RsZTlLR01BNnRuaGZzbXRxakFqUG9PRDg5d2c9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0U4bjRZcnZPMWlYdTFxMzZYOHExSG9yeWJ0UkpjK29pcEhmNnVZR3ZrUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkVPWlBWKy9hNHNXSnp4TUNIbGRxSGxRWGNsY0JVbWF1RlNIWFBmTzBXajQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR01oRGZyN2RyeEZraDNKdTh6N2NicXFKOGNvWnlieUg5aGh6M0lEOG5HST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1RMDhiNllYQkpCZjYybzR2dGlxRmdsT2h2OTRhS2Y3VHhGcnQra2RLWDA9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJS2FYUVZpVmw0UkdJZkFGOVlWREhRMzBYa090U2pNRmV0akdwZ2pWSGtjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiODVCRHhrVE81ZjdCaTZWRlZsQ0lYRkxOa0dySWlQWi9KdUs4VDVoNWlsYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJWRzlLejN6cHpWV0JnUk52b0JsU3ZmL0luOHdQUVNoWmZBZ25xbUJycEg5TW5zRXFGUnRCajQ5TFh1cThFeGcxWUZ1YXo0RWw5azdXMUJKTGFESldpZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAyLFwiYWR2U2VjcmV0S2V5XCI6XCJwaURpbS9sRXVjYXk2N1dpN3FTc2ZMZkxsUU1waWJ6b2RFMzQ2THEyaUdBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzc0Mjc2MjUyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE1QzEwMTREQTBDMzFENEFEMEFBM0Y0RDQ5RjcwNzg4XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE3Mjg3Mzl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzc0Mjc2MjUyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjZENENDQ0E2MDk1RTRERDdEOUM4NDdERkYxQkY0MTFEXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE3Mjg3Mzl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzc0Mjc2MjUyQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjNEMDA4QTBCMEE2RjlCQkI5NDlDMzZBNUNEQUY2NTlFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE3Mjg3NDN9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJMTW5YOFFsRFN1cUNwazVYOElRT25RXCIsXCJwaG9uZUlkXCI6XCIzYTdmNzY2NS02NDk2LTRlYzEtYTAyZi1kNWFjZjVlNWM0ZmJcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkN2NTlsdG5lbzRoalFtSm81L3g0UmVINFpkND1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtQ0xCWXBWY0lKVVpEZGU2bDRsRjdOT1h5K009XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiN1ZHV1JTNlpcIixcIm1lXCI6e1wiaWRcIjpcIjI2Mzc3NDI3NjI1MjoyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjYzNDE1NjQ1MTIyNzIxOjJAbGlkXCIsXCJuYW1lXCI6XCJUb3hpY1wifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSXZ2NTNZUTNkQ2JzQVlZQWc9PVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiK1BOYXJWTWtmZFJTS2dqZ2tLUWJqWG9aUUY1eFA2c3BydDlMbFRUQ20yZz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImNSbzZaZm4vdWpkdXp0cEtpNFRFM1VRK21NWURDTVBoamhlNE52UzlyTmxjUlVLTm1kUVc4YnhvODBKMm51dXdCSnpFMEZZajkrdFNLejhJLzVvUUNRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiTFAzRE9RUk5mYW1zeEZvQ01iaC9Dd2pBK0ZaamFjUFdTQTFkRUZhREwydkRVZUcwM1IrNnpvaWh4Q3J6NXdid2xJbUFoUHJFTVpPaG1LbDBZaXpiaHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI2Mzc3NDI3NjI1MjoyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmZqeldxMVRKSDNVVWlvSTRKQ2tHNDE2R1VCZWNUK3JLYTdmUzVVMHdwdG9cIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExNzI4NzM2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUhwbVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhwbS5qc29uIjogIntcImtleURhdGFcIjpcImFRa2c3TGw2NkxxOXVwMlJ4VC8rblU2V0tCWXNaOVh5dGZLcFdOZFpqWVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ5MTY1NzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE3Mjg2NTUyNzVcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
