export enum MessageComponentTypes {
  ACTION_ROW = 1,
  BUTTON = 2,
  STRING_SELECT = 3,
  INPUT_TEXT = 4,
  USER_SELECT = 5,
  ROLE_SELECT = 6,
  MENTIONABLE_SELECT = 7,
  CHANNEL_SELECT = 8,
}

export type MessageComponent = Button | ActionRow | StringSelect | InputText;

export type Button = {
  type: MessageComponentTypes.BUTTON;
  style:
    | ButtonStyleTypes.PRIMARY
    | ButtonStyleTypes.SECONDARY
    | ButtonStyleTypes.SUCCESS
    | ButtonStyleTypes.DANGER
    | ButtonStyleTypes.LINK;
  label: string;
  emoji?: Pick<EmojiInfo, 'id' | 'name' | 'animated'>;
  custom_id?: string;
  url?: string;
  disabled?: boolean;
};

export enum ButtonStyleTypes {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

export type ActionRow = {
  type: MessageComponentTypes.ACTION_ROW;
  components: Exclude<MessageComponent, ActionRow>[];
};

export type SelectComponentType =
  | MessageComponentTypes.STRING_SELECT
  | MessageComponentTypes.USER_SELECT
  | MessageComponentTypes.ROLE_SELECT
  | MessageComponentTypes.MENTIONABLE_SELECT
  | MessageComponentTypes.CHANNEL_SELECT;

export type SelectMenu<T extends SelectComponentType> = {
  type: T;
  custom_id: string;
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disabled?: boolean;
  options: StringSelectOption[];
  channel_types?: ChannelTypes[];
};

export type StringSelect = Omit<SelectMenu<MessageComponentTypes.STRING_SELECT>, 'channel_types'>;

export type StringSelectOption = {
  label: string;
  value: string;
  description?: string;
  emoji?: Pick<EmojiInfo, 'id' | 'name' | 'animated'>;
  default?: boolean;
};

export type UserSelect = Omit<SelectMenu<MessageComponentTypes.USER_SELECT>, 'channel_types' | 'options'>;

export type RoleSelect = Omit<SelectMenu<MessageComponentTypes.ROLE_SELECT>, 'channel_types' | 'options'>;

export type MentionableSelect = Omit<SelectMenu<MessageComponentTypes.MENTIONABLE_SELECT>, 'channel_types' | 'options'>;

export type ChannelSelect = Omit<SelectMenu<MessageComponentTypes.CHANNEL_SELECT>, 'options'>;

export enum ChannelTypes {
  DM = 1,
  GROUP_DM = 3,
  GUILD_TEXT = 0,
  GUILD_VOICE = 2,
  GUILD_CATEGORY = 4,
  GUILD_ANNOUNCEMENT = 5,
  GUILD_STORE = 6,
}

export type InputText = {
  type: MessageComponentTypes.INPUT_TEXT;
  custom_id: string;
  style: TextStyleTypes.SHORT | TextStyleTypes.PARAGRAPH;
  label: string;
  min_length?: number;
  max_length?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
};

export enum TextStyleTypes {
  SHORT = 1,
  PARAGRAPH = 2,
}

export type EmojiInfo = {
  name: string | undefined;
  id: string | undefined;
  // Should define the user object in future
  user?: { [key: string]: any };
  roles?: string[];
  require_colons?: boolean;
  managed?: boolean;
  available?: boolean;
  animated?: boolean;
};
