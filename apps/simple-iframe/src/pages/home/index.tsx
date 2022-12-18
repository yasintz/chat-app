import { useForm } from 'react-hook-form';
import { useAuthStorage } from './store';
import { TodoListApp } from './todo-list';

type FormDataType = {
  username: string;
  password: string;
  operation: 'login' | 'signup';
};

export const HomePage = () => {
  const { token, setToken } = useAuthStorage();
  const { handleSubmit, register } = useForm<FormDataType>();

  const onSubmit = async ({ username, password, operation }: FormDataType) => {
    const response = await fetch(
      `http://localhost:3333/api/auth/${operation}/simple-user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }
    ).then((r) => r.json());
    setToken(response.token);
  };

  return (
    <div>
      {token ? (
        <TodoListApp token={token} />
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
