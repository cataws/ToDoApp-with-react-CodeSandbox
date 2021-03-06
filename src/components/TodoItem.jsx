import { useContext } from 'react';
import { TodoContext } from './provider/TodoProvider';

export const TodoItem = () => {
  const { todos, setTodo } = useContext(TodoContext);
  const handleCompleteTask = (completeTask) => {
    const completedTodos = [...todos].map((todo) => {
      if (todo.item === completeTask.item) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodo(completedTodos);
  };
  const handleDeleteTask = (deleteTask) => {
    const deletedTodos = [...todos].filter((todo) => todo.item !== deleteTask);
    setTodo(deletedTodos);
  };

  return (
    <ul id="task_list">
      {todos.map((todo) => (
        <li
          id={todo.item}
          key={todo.item}
          style={
            todo.isCompleted === true
              ? { textDecorationLine: 'line-through', color: '#c0c0c0' }
              : {}
          }
        >
          {todo.item}
          <button
            className="task_button"
            onClick={() => handleDeleteTask(todo.item)}
          >
            Delete
          </button>
          <button
            className="task_button"
            onClick={() => handleCompleteTask(todo)}
          >
            {todo.isCompleted === false ? 'Complete' : 'Restore'}
          </button>
        </li>
      ))}
    </ul>
  );
};
