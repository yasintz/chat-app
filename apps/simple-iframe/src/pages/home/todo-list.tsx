import React, { useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStorage } from './store';
import { createTodo, getTodoList, toggleTodo } from './api';

type TodoListAppProps = {
  token: string;
};

export const TodoListApp = (props: TodoListAppProps) => {
  const [user, token] = useAuthStorage((s) => [s.user, s.token] as const);
  const createInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { data: todos, isLoading } = useQuery(['todos'], getTodoList);
  const toggleTodoMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  const createTodoMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      if (createInputRef.current) {
        createInputRef.current.value = '';
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ marginRight: 12 }}>
        <input placeholder="Todo..." ref={createInputRef} />
        <button
          onClick={() => {
            if (createInputRef.current?.value) {
              createTodoMutation.mutate(createInputRef.current?.value);
            }
          }}
        >
          Create
        </button>
        <br />
        <ul>
          {todos?.map((todo) => (
            <li
              key={todo.id}
              style={
                todo.userId === user?.id
                  ? { color: 'blue' }
                  : { opacity: 0.7, cursor: 'not-allowed' }
              }
            >
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => toggleTodoMutation.mutate(todo.id)}
                disabled={todo.userId !== user?.id}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <iframe
          src="http://127.0.0.1:4200/embedded"
          title="Chat App"
          style={{
            flex: 1,
            height: '100%',
            borderLeft: '1px solid #ddd',
          }}
          frameBorder="0"
          onLoad={(event) => {
            (event.target as HTMLIFrameElement).contentWindow?.postMessage(
              JSON.stringify({
                type: 'send_member_token',
                message: token,
              }),
              '*'
            );
          }}
        />
      </div>
    </div>
  );
};
