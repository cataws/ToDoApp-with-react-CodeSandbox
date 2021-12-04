import { createContext, useState } from 'react';

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
  const { children } = props;
  const [todos, setTodo] = useState([
    { item: 'aaa', isCompleted: false },
    { item: 'bbb', isCompleted: false },
    { item: 'ccc', isCompleted: false }
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
