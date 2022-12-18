import { useAuthStorage } from './store';

type TodoType = {
  id: string;
  text: string;
  completed: boolean;
  userId: string;
};

const getTodoList = async () => {
  return fetch(`http://localhost:3333/api/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: useAuthStorage.getState().token as string,
    },
  }).then<TodoType[]>((r) => r.json());
};

const toggleTodo = async (id: string) => {
  return fetch(`http://localhost:3333/api/todo/toggle/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: useAuthStorage.getState().token as string,
    },
  }).then<TodoType>((r) => r.json());
};
const createTodo = async (text: string) => {
  return fetch(`http://localhost:3333/api/todo/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: useAuthStorage.getState().token as string,
    },
    body: JSON.stringify({ text }),
  }).then<TodoType>((r) => r.json());
};

const authenticate = (
  operation: 'login' | 'signup',
  username: string,
  password: string
) => {
  return fetch(`http://localhost:3333/api/auth/${operation}/simple-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((r) => r.json());
};

export { getTodoList, toggleTodo, createTodo, authenticate };
