<div align="center">

  <h1><img src="utils/logo.jpg" alt="Lanya Logo" width="35"> Lanya Discord Bot</h1>
  <br>
  <p><strong>An open-source Discord bot designed to enhance community interaction with a variety of engaging and useful features.</strong></p>
  
  [![Discord](https://img.shields.io/discord/865198018872999966?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/zvmJzpNRzz)
  [![License](https://img.shields.io/github/license/birajrai/Lanya)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/birajrai/Lanya?style=social)](https://github.com/birajrai/Lanya/stargazers)
</div>

## ✨ About Lanya

Lanya is a Discord bot built to improve server engagement and provide useful tools for both administrators and members. With commands ranging from fun interactions to powerful moderation tools.

## 🚀 Features

- **🎉 Fun Commands** - Keep your community engaged with trivia, jokes, games, and more
- **🛠️ Moderation Tools** - Maintain server order with comprehensive moderation capabilities
- **🔧 Utility Functions** - Provide practical tools like calculators, translators, and weather reports
- **🎮 Minecraft Integration** - Connect your Discord server with Minecraft through server status monitoring and skin visualization
- **📈 Leveling System** - Encourage engagement with an XP-based leveling system
- **🎁 Giveaways** - Host and manage giveaways with customizable requirements
- **👋 Welcome System** - Greet new members with customizable welcome messages

## 🔍 Command Categories

<details>
<summary>ℹ️ <strong>Info Commands</strong></summary>
<br>

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `/botinfo`     | Display information about the bot      |
| `/help`        | Show help menu with all commands       |
| `/ping`        | Check the bot's response time          |
| `/roleinfo`    | View detailed information about a role |
| `/serverinfo`  | Display information about the server   |
| `/userinfo`    | Show information about a user          |
| `/level`       | Check your current level and XP        |
| `/leaderboard` | View the server's level leaderboard    |

</details>

<details>
<summary>🎈 <strong>Fun Commands</strong></summary>
<br>

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `/8ball`        | Ask the magic 8-ball a question            |
| `/catfact`      | Get a random fact about cats               |
| `/coinflip`     | Flip a coin                                |
| `/dadjoke`      | Hear a random dad joke                     |
| `/dogfact`      | Get a random fact about dogs               |
| `/joke`         | Receive a random joke                      |
| `/meme`         | View a random meme                         |
| `/pp`           | Check the size of your... nevermind        |
| `/randomnumber` | Generate a random number                   |
| `/trivia`       | Test your knowledge with a trivia question |

</details>

<details>
<summary>🔨 <strong>Moderation Commands</strong></summary>
<br>

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `/ban`       | Ban a user from the server              |
| `/clear`     | Delete multiple messages at once        |
| `/kick`      | Kick a user from the server             |
| `/lock`      | Lock a channel to prevent messages      |
| `/nick`      | Change a user's nickname                |
| `/timeout`   | Timeout a user for a specified duration |
| `/unban`     | Unban a user from the server            |
| `/unlock`    | Unlock a previously locked channel      |
| `/untimeout` | Remove a timeout from a user            |
| `/warn`      | Warn a user for inappropriate behavior  |
| `/warnings`  | View a user's warning history           |

</details>

<details>
<summary>🪛 <strong>Utility Commands</strong></summary>
<br>

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `/calculator` | Perform mathematical calculations          |
| `/define`     | Look up the definition of a word           |
| `/todo`       | Manage your personal to-do list            |
| `/translate`  | Translate text between languages           |
| `/weather`    | Check the weather for a specified location |

</details>

<details>
<summary>⚙️ <strong>Admin Commands</strong></summary>
<br>

| Command          | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `/giveaway`      | Create and manage giveaways                                 |
| `/leveladmin`    | Configure the leveling system                               |
| `/welcome`       | Set up custom welcome messages                              |
| `/guildsettings` | Manage server-specific settings                             |
| `/autorole`      | Configure roles to be automatically assigned to new members |

</details>

<details>
<summary>🌎 <strong>Minecraft Commands</strong></summary>
<br>

| Command               | Description                            |
| --------------------- | -------------------------------------- |
| `/achievement`        | Generate a Minecraft achievement image |
| `/addserverstatus`    | Add a Minecraft server to monitor      |
| `/bodyavatar`         | View a player's body avatar            |
| `/fullbody`           | View a player's full body model        |
| `/headavatar`         | View a player's head avatar            |
| `/listserverstatus`   | List all monitored Minecraft servers   |
| `/playerhead`         | Get a player's head image              |
| `/removeserverstatus` | Stop monitoring a Minecraft server     |
| `/serverstatus`       | Check the status of a monitored server |
| `/skin`               | View a player's skin                   |

</details>

## 🤝 Support Server

For any assistance, feature requests, or bug reports, join our official support server:

<a href="https://discord.gg/zvmJzpNRzz"><img src="https://discord.com/api/guilds/865198018872999966/widget.png?style=banner2" alt="Support Server"></a>
<br>
  <a href="https://discord.gg/zvmJzpNRzz" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="discord logo"  />

## 🔧 Quick Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.9.0 or higher)
- [MongoDB](https://www.mongodb.com/) database
- [Discord Bot Token](https://discord.com/developers/applications)
- Weather API key (for weather commands)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/birajrai/Lanya.git
cd Lanya
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Setup Script**

```bash
npm run setup
```

4. **Enter Your Configuration Details**

The setup script will prompt you to enter:

- Discord Bot Token
- Client ID
- Weather API Key
- MongoDB Connection String

5. **Start the Bot**

```bash
npm run start
```

For production environments:

```bash
npm run start:prod
```

## 🧩 Project Structure

```
Lanya/
├── commands/           # Command files organized by category
├── events/             # Event handler files
├── models/             # Database models
├── utils/              # Utility functions
├── config.json         # Configuration file (generated by setup)
├── index.js            # Main entry point
└── setup.js            # Interactive setup script
```

## 🛠️ Development

### Adding New Commands

1. Create a new command file in the appropriate category folder
2. Use the command template structure
3. Register the command in the command handler

Example command structure:

```javascript
module.exports = {
  name: 'commandname',
  description: 'Command description',
  options: [], // Slash command options
  execute: async (interaction, client) => {
    // Command code here
  },
};
```

## 🤲 Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests and documentation as appropriate.

## 📜 Code of Conduct

We strive to maintain a friendly, inclusive, and respectful community. Please follow these guidelines:

- **Be Respectful**: Treat others with respect. Disagreements are okay, but be civil.
- **Be Inclusive**: We welcome all contributions and encourage participation from everyone.
- **Be Supportive**: Help others when they have questions and be open to feedback.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📋 Roadmap

- [ ] Server logs system
- [ ] Advanced auto-moderation features
- [ ] Custom command creation interface
- [ ] Web dashboard for easy configuration
- [ ] Enhanced Minecraft integration features
- [ ] Music playback capabilities
- [ ] Role reaction system

Have suggestions? Feel free to share them in our [Support Server](https://discord.gg/zvmJzpNRzz)!

---

<div align="center">
  Made with ❤️ by the Lanya Development Team & Fork of Zeltux.
</div>
