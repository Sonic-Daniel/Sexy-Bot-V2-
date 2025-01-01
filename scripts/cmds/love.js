module.exports = {
  config: {
    name: "love",
    aliases: ["lve"],
    version: "1.0",
    author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
    countDown: 10,
    role: 0,
    shortDescription: "Play miss, the oldest gambling game",
    longDescription: "Play miss, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <hentai/p*rno> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["hentai", "p*rno"].includes(betType)) {
      return message.reply("🎶| 𝘤𝘩𝘰𝘪𝘴𝘪𝘴 𝘩𝘦𝘯𝘵𝘢𝘪 𝘰𝘶 𝘱*𝘳𝘯𝘰");
    }

    if (!Number.isInteger(betAmount) || betAmount < 1000) {
      return message.reply("👻| 𝑷𝒂𝒓𝒅𝒐𝒏 𝒅𝒆𝒎𝒂𝒏𝒅𝒆 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒕 𝒂 𝒒𝒖𝒆𝒍𝒒𝒖'𝒖𝒏");
    }

    if (betAmount > userData.money) {
      return message.reply("𝑪𝒐𝒏𝒕𝒊𝒏𝒖𝒔 𝒅𝒆 𝒑𝒆𝒓𝒅𝒓𝒆 𝒆𝒕 𝒕𝒐𝒏 𝒄𝒐𝒆𝒖𝒓 𝒔𝒆𝒓𝒂 𝒂 𝒎𝒐𝒊🫀");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n[ 💧${resultString}💧 ]\n(⁠ﾉ✨ヮ✨⁠)⁠ﾉ⁠*⁠.⁠✧ | 𝑩𝒓𝒂𝒗𝒐 𝒕'𝒂𝒔 𝒈𝒂𝒈𝒏𝒆 🌱${winAmount}€🌱`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n[💧${resultString}💧]\n\n(⁠^⁠～⁠^⁠;⁠)⁠ゞ | 𝑀𝑒𝑟𝑑𝑒....🙍 𝑐𝑜𝑚𝑚𝑒𝑛𝑡 𝑡𝑢 𝑝𝑒𝑢𝑥 𝑝𝑒𝑟𝑑𝑟𝑒 🌱${betAmount}€🌱`);
    }
  }
};
