import Command from '../interfaces/Command';
import Bot from './Bot';

class CommandListener {
  constructor(private commands: Command[]) {
    if (!Bot.client) return;

    Bot.client.on('interactionCreate', async (interection) => {
      if (!interection.isCommand()) return;

      this.commands.forEach((command) => {
        if (interection.commandName === command.name) command.run(interection);
      });
    });
  }
}

export default CommandListener;
