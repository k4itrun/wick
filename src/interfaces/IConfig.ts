export interface IConfig {
  name: string;
  token: string;
  clientId: string;
  color: string;
  port: string;
  ownerIDs: string[];
  log: {
    guildId: string;
    channelId: string;
  };
  roles: {
    [key: string]: string;
  };
  capmonster: {
    key: string;
  };
}
