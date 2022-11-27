import { Form, ActionFunction, redirect } from 'react-router-dom';
import { environment } from '../../environments/environment';
import useAuthStore from '../../store/auth';

//#region Page Action
const serverUrl = environment.server[environment.dataEnv].endpoint;

export const authAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');

  const response = await fetch(`${serverUrl}/auth/customer/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((r) => r.json());

  useAuthStore.getState().setToken(response.token);
  return redirect('/');
};
//#endregion

export const AuthPage = () => {
  return (
    <div>
      <div>
        <h1>Signin</h1>

        <Form method="post">
          <input type="text" name="email" placeholder="example@gmail.com" />
          <input type="password" name="password" placeholder="****" />
          <button type="submit">Signin</button>
        </Form>
      </div>
      <hr />
      <div>
        <h1>Signup</h1>
        <p>WIP</p>
      </div>
    </div>
  );
};
