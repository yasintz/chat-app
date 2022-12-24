import { environment } from '../../environments/environment';
import { embeddedChatAppWindowMessageSchema } from './schema';

type SafeParseSuccess<Output> = {
  success: true;
  data: Output;
};
type SafeParseError = {
  success: false;
  error: unknown;
};
type SafeParseReturnType<Output> = SafeParseSuccess<Output> | SafeParseError;

export function safeParseEventDataString(
  dataStr: string
): SafeParseReturnType<
  ReturnType<typeof embeddedChatAppWindowMessageSchema['parse']>
> {
  try {
    const data = JSON.parse(dataStr);
    const parseResponse = embeddedChatAppWindowMessageSchema.safeParse(data);

    return parseResponse;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

const serverUrl = environment.server[environment.dataEnv].endpoint;

export const authMemberWithExternalToken = async (memberToken: string) => {
  const response = await fetch(`${serverUrl}/app-auth/member`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: memberToken,
    },
  }).then((r) => r.json());

  return response.token;
};
