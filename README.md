# Gemini GitHub Issue Summarizer Bot

This is a Discord bot that uses the Gemini API to summarize open issues from a linked GitHub repository.

## Features

-   Fetches open issues from a specified GitHub repository.
-   Uses the Gemini API to generate a one-sentence summary for each issue.
-   Posts the summaries to a designated Discord channel.
-   Adds 👍 and 👎 reactions to each summary message for voting/prioritization.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jitu028/gemini-github-issue-summarizer.git
    cd gemini-github-issue-summarizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure the bot:**
    -   Rename the `.env.example` file to `.env`.
    -   Open the `.env` file and fill in the required values:
        -   `DISCORD_TOKEN`: Your Discord bot token.
        -   `GEMINI_API_KEY`: Your Google Gemini API key.
        -   `GITHUB_TOKEN`: Your GitHub personal access token (with `repo` scope).

    -   Open the `config.json` file and set the following values:
        -   `githubRepo`: The GitHub repository you want to track (e.g., "owner/repo-name").
        -   `issuesChannelId`: The ID of the Discord channel where the summaries should be posted.

## Running the Bot

Once the setup is complete, you can start the bot with the following command:

```bash
node index.js
```

## Usage

To trigger the bot and get summaries of the open issues, go to any channel in your Discord server and type:

```
!summarize
```
