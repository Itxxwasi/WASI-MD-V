//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZhYk80VlRSWngycXJlYjZiUm95VjV2Q0lYb1QvdUgyU2tHSWFOWDRsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWdSQTBweGFUL016NUFvbzZWVEVxTHdyYkM3OHhQYlNnc2V3dUdrMStUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSVFxUmx3ZkNqdGFNbSs5Y1Y4eTRhWWZoY2J6d0FpK3JUeEk2STJXYjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYeUdZSkwxZXFsNmZ2RnhrNE5WbjFKUXVHdWJSUUlwc0FlejUvSjVjMlVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJY0NYNG85R01SVFlpODRDWk5KYUhSNEpqOWI4clg1eGJBY05yS0YxVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRYL0dMM3Y4ZE5kTFRVUlpEM0xLcnI2TDRUcVprTEJHNDFKNjJXQWdNQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RaY0NTbS85RVpoVkVCanhIMUJ2WVQ4RmI4NnIwRXo0STJ4UjViZGpFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlFqNlZUbmFUVEQ3SXZkVkpUWjNTaUhEQkM5ZlhWdHZjUllkbW84RUVCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8vMWZlUEVjY1V4T3kyczZFaW5KRkxKVk9hd3pDSHZJVnVhcEV5UDNiZjA1aDRWaElSamlUQ3F4SDRYMUpXdXJaa1dNK2NRRWJ1aDdHL3g1eHVxT0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJickZadTBmSHc2a2h4ZHl2WmVnYlBUV3F6cWs3MTNPclRwQlh0RVlpSEI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU4ODI1MjAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCOEZBOTJFMkQ2N0EyMDJGNEJDMUY3REEyMUU1OERFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjQ0MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU4ODI1MjAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRFMTc4OTkwRkFGNzE5MkUxM0JCRjA0QkNEQjhBNjMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjQ0MzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU4ODI1MjAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3MkEwMjAwMkZDODQ4NzM2RDEzQjlEQ0NENTVBQTEzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjQ0MzR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU4ODI1MjAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYzMEEyODRGOTI2NDQ4QjYwNkJCMDQ4NERFNzgyNUJEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0NjQ0MzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdYOE1hOC1VUUkyWFRxTnJVMUk5ZnciLCJwaG9uZUlkIjoiZjU0YWNlYWItZDBlNS00YzQwLWI0MzUtOTE2Zjc4MjNhZmQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9BbGlHR1grZ0hNSEpzbXVOak0waFFnQnZsQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0dlpqbmVpZjk0QzRLVkdwTUxLOW5tZVFjQjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlMzVk0zQkQiLCJtZSI6eyJpZCI6Ijk0NzU4ODI1MjAyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS0FWSVNIS0EgTklSTUFMIEtBTktBTkFNR0UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pPaDAvZ0ZFS09WazdrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJCUDZoelNaMEd4Yld4WHB2ckluTFZqSkRJYmZ5UGJQVnpZWHZFanlEVVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlcxbThXSzN5eGlSS096S0Z2Z2o5N3J2WUdzam5oV3VyQjZseUhxTjMybWtpS3grR2xCUjFIS3hGcnJiTjZpcHQzVndyMDBlUlVBd2RGSURYM1o0SURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwSmU1UHFqQ0RYNlcyZGJFWk52RWcrL0MzQ1NhU0lvRVdPRlJUamJFSXlURCtQYUNYNGc3RlIzMFh5bzA0aHdLUnJsdXJEd2t3UVpjU3QxV1p6aVpDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU4ODI1MjAyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVFUK29jMG1kQnNXMXNWNmI2eUp5MVl5UXlHMzhqMnoxYzJGN3hJOGcxRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDQ2NDQzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHMHIifQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
