const axios = require('axios');

let PriyaPrefix = [
  'sexybot', // Add Your Prefix Here
];

const axiosInstance = axios.create();

module.exports = {
  config: {
    name: 'ask',
    version: '2.2.0',
    role: 0,
    category: 'system',
    author: 'Priyanshi || Priyansh',
    shortDescription: 'Artificial Intelligence',
    longDescription: 'Ask Anything To Ai For Your Answers',
  },

  onStart: async function () {},

  onChat: async function ({ message, event, args, api, threadID, messageID }) {
    const command = args[0].toLowerCase();

    // Help Command
    if (command === 'help') {
      const helpMessage = `
      🌟 *AI Commands* 🌟
      - Prefixes: ${PriyaPrefix.join(', ')}
      - Add Prefix: addprefix <prefix>
      - AI Query: ${PriyaPrefix[0]} <your query>
      - Say Hi: hi
      `;
      await message.reply(helpMessage);
      return;
    }

    // Add New Prefix Command
    if (command === 'addprefix') {
      const newPrefix = args[1];
      if (newPrefix && !PriyaPrefix.includes(newPrefix)) {
        PriyaPrefix.push(newPrefix);
        await message.reply(`New prefix "${newPrefix}" added successfully!`);
      } else {
        await message.reply('Please provide a valid and unique prefix.');
      }
      return;
    }

    // Check for prefixes in the message
    const ahprefix = PriyaPrefix.find((p) => event.body && event.body.toLowerCase().startsWith(p));
    if (!ahprefix) {
      return;
    }

    const priya = event.body.substring(ahprefix.length).trim();
    if (!priya) {
      await message.reply('༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n𝙎𝙖𝙡𝙪𝙩 𝙟𝙚 𝙨𝙪𝙞𝙨 𝙎𝙚𝙭𝙮𝙗𝙤𝙩 🥰..𝙡𝙚 𝙩𝙤𝙪𝙩 𝙥𝙧𝙚𝙢𝙞𝙚𝙧 𝘽𝙤𝙩 𝙋*𝙧𝙫𝙚𝙧𝙨 é𝙡𝙖𝙗𝙤𝙧é 𝙥𝙖𝙧 ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡 ❤️‍🔥☘️...𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙥𝙪𝙞𝙨-𝙟𝙚 𝙩𝙚 𝙨𝙖𝙩𝙞𝙨𝙛𝙖𝙞𝙧𝙚 ?!🍑💦\n━━━━━━━━━━━━━━━━\n╔╦══• •✠•❀•✠ • •══╦╗\n🌶| 𝙊𝙬𝙣𝙚𝙧 :ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡\n🔗| 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙇𝙞𝙣𝙠 :https://facebook.com/hentai.san.1492\n╚╩══• •✠•❀•✠ • •══╩╝');
      return;
    }

    const apply = [
      '𝚎𝚗𝚝𝚎𝚛 (𝚚)*',
      '𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙷𝚎𝚕𝚙 𝚈𝚘𝚞?',
      '𝚀𝚞𝚊𝚛𝚢 𝙿𝚕𝚎𝚊𝚜𝚎....',
      '𝙷𝚘𝚠 𝙲𝚊𝚗 𝙸 𝙰𝚜𝚜𝚒𝚜𝚝 𝚈𝚘𝚞?',
      '𝙶𝚛𝚎𝚎𝚝𝚒𝚗𝚐𝚜!',
      '𝙸𝚜 𝚃𝚑𝚎𝚛𝚎 𝚊𝚗𝚢𝚝𝚑𝚒𝚗𝚐 𝙴𝚕𝚜𝚎 𝙸 𝙲𝚊𝚗 𝙳𝚘?'
    ];
    const randomapply = apply[Math.floor(Math.random() * apply.length)];

    if (command === 'hi') {
      await message.reply(randomapply);
      return;
    }

    const encodedPrompt = encodeURIComponent(args.join(' '));

    await message.reply('⏰| 𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁...');

    try {
      const response = await axiosInstance.get(`https://priyansh-ai.onrender.com/gemini/ai?query=${encodedPrompt}`);
      const Priya = response.data;
      const priyares = `༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n🥒| ${Priya}🍑💦\n━━━━━━━━━━━━━━━━`;
      await message.reply(priyares);
    } catch (error) {
      await message.reply('𝙴𝚛𝚛𝚘𝚛...');
    }
  }
};
