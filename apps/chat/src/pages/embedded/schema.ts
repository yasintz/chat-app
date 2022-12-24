import * as z from 'zod';

export enum WindowMessageType {
  SendMemberToken = 'send_member_token',
}

export const embeddedChatAppWindowMessageSchema = z.object({
  type: z.nativeEnum(WindowMessageType),
  message: z.string(),
});
