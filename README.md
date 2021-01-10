# Fatt-Bot - 0.5.0
> Fatt-Bot is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

## Setup

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

```
git clone https://github.com/williamthefatty/Fatt-Bot.git
cd Fatt-Bot
npm install
```


⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false,
  "STAY_TIME": 30
}
```


## Usage

Commands for this bot follow this structure: `/<command>`

| Command | Description
|---------|-------------|
| `/help` | Displays commands. |
| `/avatar` | Get someones avatar
| `/division` | Division
| `/coin` | Flip a Coin
| `/help (h)` | Display all commands and descriptions
| `/loop (l)` | Toggle music loop
| `/lyrics (ly)` | Get lyrics for the currently playing song
| `/np` | Show now playing song
| `/pause` | Pause the currently playing music
| `/ping` | PING
| `/play` | (p) Plays audio from YouTube or Soundcloud
| `/playlist` | (pl) Play a playlist from youtube
| `/prune` | Delete Messages
| `/pruning` | Toggle pruning of bot messages
| `/queue (q)` | Show the music queue and now playing.
| `/remove` | Remove song from the queue
| `/resume` | (r) Resume currently playing music
| `/search` | Search and select videos to play
| `/shuffle` | Shuffle queue
| `/skip (s)` | Skip the currently playing song
| `/playlist` | Play youtube playlists
| `/uptime` | Displays Uptime
| `/reee` | Plays Tees Screech
| `/laugh` | Plays laughtrack
| `/clip [name]` | Play Clip
| `/clips` | List Clips