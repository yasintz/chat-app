import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/auth';
import { WindowMessageType } from './schema';
import { authMemberWithExternalToken, safeParseEventDataString } from './util';

export const EmbeddedChatApp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const listener = async (event: MessageEvent<string>) => {
      // skip initial event
      if (event.data === '') {
        return;
      }

      const response = safeParseEventDataString(event.data);

      if (!response.success) {
        window.top?.postMessage(
          JSON.stringify({
            type: 'invalid_event',
            error: response.error,
          })
        );
        return;
      }

      const { data } = response;

      if (data.type === WindowMessageType.SendMemberToken) {
        const token = await authMemberWithExternalToken(data.message);

        useAuthStore.getState().setToken(token);
        navigate('/', { replace: true });
      }
    };

    window.addEventListener('message', listener, false);

    return () => {
      window.removeEventListener('message', listener, false);
    };
  }, [navigate]);
  return (
    <div>
      <h1>Loading....</h1>
    </div>
  );
};
