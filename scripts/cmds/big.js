module.exports = {
  config: {
    name: "big",
    aliases: ["bg"],
    version: "1.0",
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡",
    countDown: 1,
    role: 0,
    shortDescription: "Amuses toi bien au jeu du hasard",
    longDescription: "Seul le hasard te rendras riche ou pauvre...Bonne chance(sex/preservatif)",
    category: "game",
    guide: "{pn} <sex/preservatif> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["sex", "psv"].includes(betType)) {
      return message.reply("🎁 | 𝘾𝙝𝙤𝙞𝙨𝙞𝙨 : '𝘀𝗲𝘅' 𝙤𝙪 '𝗽𝘀𝘃'.");
    }

    if (!Number.isInteger(betAmount) || betAmount < 50) {
      return message.reply("🌿 | 𝐌𝐢𝐬𝐞 𝐚𝐮 𝐦𝐨𝐢𝐧𝐬 50$ 𝐨𝐮 𝐩𝐥𝐮𝐬.");
    }

    if (betAmount > userData.money) {
      return message.reply("💁 | 𝑽𝒂𝒔 𝒅𝒆𝒎𝒂𝒏𝒅𝒆𝒓 𝒖𝒏 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒕 𝒂 𝒒𝒖𝒆𝒍𝒒𝒖'𝒖𝒏");
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
      const winAmount = 2 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n<(*❤️∀❤️*)ﾉ\n🍀[ ${resultString} ]🍀\n🎁| 𝐁𝐢𝐞𝐧 𝐣𝐨𝐮𝐞 𝐭'𝐚𝐬 𝐠𝐚𝐠𝐧𝐞 🎀${winAmount}€🎀 𝐞𝐭 𝐮𝐧𝐞 𝐧𝐮𝐢𝐭 𝐬𝐮𝐜𝐫é𝐞 𝐚𝐯𝐞𝐜 𝐦𝐨𝐢!`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━(⁠╯⁠ರ⁠ ⁠~⁠ ⁠ರ⁠)⁠╯\n🍁[ ${resultString} ]🍁\n🤦🏼| 𝐂𝐨𝐦𝐦𝐞𝐧𝐭 𝐯𝐞𝐮𝐱-𝐭𝐮 𝐞𝐭𝐫𝐞 𝐬𝐚𝐭𝐢𝐬𝐟𝐚𝐢𝐭 𝐬𝐢 𝐭𝐮 𝐩𝐚𝐬𝐬𝐞𝐬 𝐭𝐨𝐧 𝐭𝐞𝐦𝐩𝐬 𝐚 𝐩𝐞𝐫𝐝𝐫𝐞 🎀${betAmount}€🎀.`);
    }
  }
};
