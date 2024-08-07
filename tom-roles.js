require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const CHANNEL_ID = '559253806135640082'; // General chat of Maledict
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
async function readConfigAndMessages() {
  const filePath = path.join(__dirname, 'tomMessages.json');
  const data = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

async function sendRandomMessageAboutTom(pic = false) {
  try {
    const { messages, images } = await readConfigAndMessages();
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel && pic) {
      channel.send(randomImage);
    } else if (channel) {
      channel.send(randomMessage);
    }
  } catch (err) {
    console.error('Failed to send message:', err);
  }
}

async function startRandomMessageInterval() {
  function scheduleNextMessage() {
    // Calculate a random interval between 1 day (24 hours) and 7 days (168 hours)
    const intervalHours = 24 + Math.random() * (168 - 24);
    const intervalMilliseconds = intervalHours * 60 * 60 * 1000;

    setTimeout(() => {
      sendRandomMessageAboutTom().then(scheduleNextMessage);
    }, intervalMilliseconds);
  }

  scheduleNextMessage();
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}! v2.0.1`);
  startRandomMessageInterval();

  client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === '!tompic' && !message.author.bot) {
      sendRandomMessageAboutTom(true); // true is for sending a pic - false by default
    } else if (
      message.content.toLowerCase() === '!tom' &&
      !message.author.bot
    ) {
      sendRandomMessageAboutTom();
    }
  });
});

client.login(BOT_TOKEN);
