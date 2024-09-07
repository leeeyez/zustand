import useTodoStore from "../store/store";

function TodoItem({ todo }) {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </span>
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
