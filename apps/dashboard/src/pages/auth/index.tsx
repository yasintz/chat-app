import { environment } from '../../environments/environment';
import { useForm } from 'react-hook-form';
import useAuthStore from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from '@ui';

const managerUrl = environment.manager[environment.dataEnv].endpoint;

type FormValues = {
  email: string;
  password: string;
};

export const AuthPage = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      const response = await fetch(`${managerUrl}/auth/customer/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then((r) => r.json());
      setToken(response.token);
      toast.success('Login successful 🎉');
      navigate('/', { replace: true });
    } catch (error) {
      toast.error(
        'Login failed',
        "Maybe server is down or user doesn't exist"
      );
    }
  };

  return (
    <div>
      <div>
        <h1>Signin</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="example@gmail.com"
            {...register('email')}
          />
          <input type="password" placeholder="****" {...register('password')} />
          <button type="submit">Signin</button>
        </form>
      </div>
      <hr />
      <div>
        <h1>Signup</h1>
        <p>WIP</p>
      </div>
    </div>
  );
};
