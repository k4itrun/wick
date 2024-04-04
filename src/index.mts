import { BotClient } from "./structs/BotClass.mts";
import { Client, GatewayIntentBits } from "discord.js";
import './server/express.mts';

const sharedClient = new BotClient(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
    ],
  })
);

const allSockets = new Map<string, any>();

export { sharedClient, allSockets };
