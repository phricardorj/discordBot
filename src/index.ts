import Bot from './classes/Bot';
import { config } from 'dotenv';
import Rest from './classes/Rest';
import Comands from './commads';
import CommandListener from './classes/CommandListener';

config();

const init = () => {
  if (!process.env.TOKEN) {
    console.error('token not informed');
    return;
  }

  if (!process.env.CLIENT_ID) {
    console.error('ClientId not informed');
    return;
  }

  const bot = new Bot(process.env.TOKEN);
  const rest = new Rest(process.env.TOKEN, process.env.CLIENT_ID);
  const comands = new CommandListener(Comands);
  rest.registerCommands(Comands);
  rest.start();
  bot.start();
};

init();
