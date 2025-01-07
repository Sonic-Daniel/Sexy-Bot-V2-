module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "kshitiz",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100089627205102",
"100090405019929"];
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "𝙏𝙪 𝙚𝙨 𝙗𝙞𝙚𝙣 𝙩𝙧𝙤𝙥 𝙛𝙖𝙞𝙗𝙡𝙚 ( •_•)\/ >🧠\ ",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝘽𝙤𝙨𝙨...𝙫𝙤𝙪𝙨 𝙚𝙩𝙚𝙨 𝙙𝙚𝙨𝙤𝙧𝙢𝙖𝙞𝙨 𝙖𝙙𝙢𝙞𝙣...𝙡𝙚 𝙥𝙤𝙪𝙫𝙤𝙞𝙧 𝙚𝙨𝙩 𝙖 𝙫𝙤𝙪𝙨 😛🌶`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("An error occurred while promoting to admin.", event.threadID);
 }
 },
};
