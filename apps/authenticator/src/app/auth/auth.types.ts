export type JwtCommonPayloadType = {
  sub: string;
  'https://chat.app/jwt/claim': {
    'user-id': string;
    'app-id': string;
    user?: {
      name: string;
    };
  };
};
