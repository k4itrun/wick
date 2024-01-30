export interface IUser {
  id?: string,
  username?: string,
  avatar?: string,
  avatar_decoration?: boolean,
  discriminator?: string,
  public_flags?: number,
  purchased_flags?: number,
  premium_usage_flags?: number,
  flags?: number,
  banner?: string,
  banner_color?: string,
  accent_color?: number,
  bio?: string,
  locale?: string,
  nsfw_allowed?: boolean,
  mfa_enabled?: boolean,
  premium_type?: number,
  email?: string,
  verified?: boolean,
  phone?: string
}

export interface IFriend {
  id: string;
  type: number;
  nickname: string | null
  user: {
      id: string
      username: string
      avatar: string
      avatar_decoration: string | null
      discriminator: string
      public_flags: 0
  }
}

export interface IChannel {
  id: string,
  type: number,
  last_message_id: string,
  recipients: IFriend[]
}

export interface IBoost {
  id: string,
  subscription_id: string,
  premium_guild_subscription: {
      id: string,
      user_id: string,
      guild_id: string,
      ended: boolean
  }
  canceled: boolean,
  cooldown_ends_at: string
}