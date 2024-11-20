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
  process.env.GURL || "https://whatsapp.com/channel/0029Va9lKYnBfxoGEWMuLW3h";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029Va9lKYnBfxoGEWMuLW3h";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://www.facebook.com/share/p/5bq7EcsYXHf7yvxd/?mibextid=xfxF2i";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94766498288";
global.owner = process.env.OWNER_NUMBER || "94766498288";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFBZmNEUFNmV01VYXBEV0N6UnBpbVFRVnJqZEtnVkxDYVdDUllTUC9GVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEUwamVobEFwNnE1V01UNmx1eCt2MzBmV1gzRjhGZ0Q1WCtwMC93MWxFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQVNEQmtHRjhUUjRYQ1haeC9KdWt3YUJxc3kvZXVaK0pDeGxsVm4rTkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIRmdjalFiK3R3WHhYaENVaU4yMVpYWU83YTFrdkhMZWN6dUZSVk5kb2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLKzVQYmt6ejVoeW82UXJpZmc3S2NTNURxSWVBTVIvc0M1aFlRQWg3bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldkUjFmRDd0SjE1M2VTbFFTWExuUnhmMG8xc2hBMmZ3UGdUdm92aXZieTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lETUFkc0t0Ni83RDlKYjIwR1RWTldsTTJBUFowcERjV0xiU1hsUkNXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkhNZEFEUWcxK2R5Z3VDZU9DS25pYXF5alRXY2xZZ0dFeGxMaDlNMWV5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZLR21lMVppaHgrVHdzUHdlS20wTHFtbkNCTlVhUXZGRWpqakx5dXFGZTZhM05FTUJvdVNReXRjb1N1ZitaaHFNa01La1hoY0txNEVyY1F4emZWdWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiYXNFOWkrYnJQM0REdEhGVWpHOWd2SXNyY29DUTl2Qk1BL3N3aDVVMGhuZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR095MHQ3R0tRY2VSS0xKc2c3Y2UzdyIsInBob25lSWQiOiI4ZmI0YzBlZi01MjVjLTRlYjItYjFiYy05Y2ZiNTI3NThhYWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlJKSnZpRFBqWFl0WWhDbFJ2UGkrUVRYUWY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBSHE4Z21CcDFRMkVHRmhYRXpjSDIxOXVFUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFVlo4UU5LOSIsIm1lIjp7ImlkIjoiOTQ3NjY0OTgyODg6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiJ0RhcmsgQWxwaGEnIHwgTGFua2VzaCB8In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdkkyZFVCRU4yY2w3a0dHQlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzdWZURmQ0ZTEyMVc4eWtvSndlZ1l6UHFab1RacENZRjFZcUU4dmVxQ2c0PSIsImFjY291bnRTaWduYXR1cmUiOiJaQzdBUTJDMFJvdms5R3VMaUtJV0l3OWpGMDRzanBFTmtFV0R5Ti8yQmhZMHlFeXJjUlI3TUVHbTMvcG1yOGlyUldaRm43NlVXLzFsbzJQa3B2Q01Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVXpFellpS0Jvbkh1M1hGT2ZKSS9IeHJaMWdjUnVmeXhrV2xieFpyM2lTUTNkZlNkL0hjVFcvVFFtcVliNzBZUG1jc0RnUTN0bWZ0NFF5dlZHRlN6anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjQ5ODI4ODoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkN24weFhlSHRkdFZ2TXBLQ2NIb0dNejZtYUUyYVFtQmRXS2hQTDNxZ29PIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTMwOTIyfQ==";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "Dark Alpha,
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Lankesh Sandaruwan",
  errorChat: process.env.ERROR_CHAT || "94766498288",
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
