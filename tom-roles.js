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

const CHANNEL_ID = '559253806135640082';
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
async function readConfigAndMessages() {
  const filePath = path.join(__dirname, 'tomMessages.json');
  const data = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

async function sendRandomMessageAboutTom() {
  try {
    const { messages } = await readConfigAndMessages();
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (channel) {
      channel.send(randomMessage);
      console.log(`Sent message: ${randomMessage}`);
    }
  } catch (err) {
    console.error('Failed to send message:', err);
  }
}

async function startRandomMessageInterval() {
  const { intervalMinutes } = await readConfigAndMessages();
  const intervalMilliseconds = intervalMinutes * 60 * 1000;

  function scheduleNextMessage() {
    setTimeout(() => {
      sendRandomMessageAboutTom().then(scheduleNextMessage);
    }, intervalMilliseconds);
  }

  scheduleNextMessage();
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}! Lets go!`);
  startRandomMessageInterval();
});

client.login(BOT_TOKEN);
