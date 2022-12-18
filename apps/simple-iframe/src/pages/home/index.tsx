import { useForm } from 'react-hook-form';
import { authenticate } from './api';
import { useAuthStorage } from './store';
import { TodoListApp } from './todo-list';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type FormDataType = {
  username: string;
  password: string;
  operation: 'login' | 'signup';
};

export const HomePage = () => {
  const { token, login, logout } = useAuthStorage();
  const { handleSubmit, register } = useForm<FormDataType>();

  const onSubmit = async ({ username, password, operation }: FormDataType) => {
    const response = await authenticate(operation, username, password);
    console.log(response);
    login(response.token, response.user);
  };

  return (
    <div style={{ height: '100%' }}>
      {token ? (
        <>
          <button onClick={logout}>Logout</button>
          <br />
          <hr />
          <QueryClientProvider client={queryClient}>
            <div style={{ height: 'calc(100% - 48px)' }}>
              <TodoListApp token={token} />
            </div>
          </QueryClientProvider>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          username: <input {...register('username', { required: true })} />
          <br />
          password: <input {...register('password', { required: true })} />
          <br />
          <select {...register('operation')} defaultValue="login">
            <option value="login">Login</option>
            <option value="signup">Signup</option>
          </select>{' '}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
