import { Client, Intents } from 'discord.js';

const intents = [Intents.FLAGS.GUILDS];

class Bot {
  public static client: Client;
  constructor(private token: string) {
    Bot.client = new Client({
      intents,
      presence: {
        activities: [
          {
            type: 'LISTENING',
            name: '@phricardorj',
          },
        ],
      },
    });

    Bot.client.on('ready', () => {
      if (Bot.client.user)
        console.log(`Bot attending as ${Bot.client.user.tag}`);
    });
  }

  start() {
    Bot.client.login(this.token);
  }
}

export default Bot;
