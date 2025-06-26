const fetch = require('node-fetch');

async function getOpenIssues(repo) {
  const url = `https://api.github.com/repos/${repo}/issues?state=open`;
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  return response.json();
}

module.exports = { getOpenIssues };
