import Command from '../interfaces/Command';

export const ping: Command = {
  name: 'ping',
  description: 'ping responds pong',
  run: async (interection) => {
    await interection.reply('PONG');
  },
};
