
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { summarizeIssue } = require('./gemini');
const { getOpenIssues } = require('./github');
const { githubRepo, issuesChannelId } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!summarize')) {
    try {
      const issues = await getOpenIssues(githubRepo);
      const issuesChannel = await client.channels.fetch(issuesChannelId);

      for (const issue of issues) {
        const summary = await summarizeIssue(issue);
        const issueMessage = await issuesChannel.send(summary);
        await issueMessage.react('👍');
        await issueMessage.react('👎');
      }
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while summarizing issues.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
