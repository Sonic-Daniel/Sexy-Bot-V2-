const axios = require('axios');

module.exports = {
    name: 'ask',
    description: 'An AI command powered by Neuronspike, modified by joshua apostol',
    aliases: ['gpt'],
    cooldown: 0,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n𝙎𝙖𝙡𝙪𝙩...𝙢𝙤𝙞 𝙘'𝙚𝙨𝙩 𝙎𝙚𝙭𝙮𝙗𝙤𝙩, 𝙚𝙨-𝙩𝙪 𝙚𝙣 𝙙𝙞𝙛𝙛𝙞𝙘𝙪𝙡𝙩é𝙨 !? 𝙎𝙞 𝙤𝙪𝙞 𝙥𝙤𝙨𝙚 𝙢𝙤𝙞 𝙩𝙖 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣...`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙧𝙚𝙦𝙪𝙚𝙨𝙩 ! 𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩...⏰`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
            const response = data.content;

            const finalResponse = `༺『 𝐇𝐄𝐍𝐓𝐀𝐈ᬊ᭄𝐒𝐀𝐍 』༻\n━━━━━━━━━━━━━━━━\n🥒..| ${response}☘️✨🧙‍♂️\n━━━━━━━━━━━━━━━━`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
