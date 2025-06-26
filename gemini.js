const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function summarizeIssue(issue) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
  const prompt = `Summarize the following GitHub issue in one sentence:

Title: ${issue.title}

Body: ${issue.body}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const summary = await response.text();

  return `**${issue.title}**\n${summary}`;
}

module.exports = { summarizeIssue };
