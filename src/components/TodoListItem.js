import { RxCross2 } from 'react-icons/rx';

const TodoListItem = ({ index, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <li style={{ position: 'relative' }}>
      <label>{todo}</label>
      <button
        style={{ position: 'absolute', right: 10 }}
        onClick={handleDelete}
      >
        <RxCross2 color='#cc9a9a' />
      </button>
    </li>
  );
};

export default TodoListItem;
