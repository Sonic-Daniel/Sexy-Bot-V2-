const fs = require('fs');

module.exports = {
  config: {
    name: "ai",
    version: "1.0",
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡", // this cmd will expire if you change this credits
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "reply",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
   const link = [
"https://i.ibb.co/xjN5mq3/image.jpg",
]
  let img =
link[Math.floor(Math.random()*link.length)]
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "ai":
          const replies = [
            "🚫| 𝐀𝐩𝐩𝐞𝐥𝐥𝐞𝐬 𝐦𝐨𝐢 𝐩𝐚𝐫 𝐀𝐬𝐭𝐫𝐨𝐛𝐨𝐭...𝐩𝐚𝐬 𝐚𝐢 ! 𝐋𝐚 𝐩𝐫𝐨𝐜𝐡𝐚𝐢𝐧𝐞 𝐟𝐨𝐢𝐬 𝐣'𝐭𝐞 𝐣𝐞𝐭𝐭𝐞 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐧é𝐚𝐧𝐭🌪😑",
          ];
          api.setMessageReaction("🙄", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
attachment: await global.utils.getStreamFromURL(img)})
          break;
        default:
          return; 
      }
    }
  },
};
