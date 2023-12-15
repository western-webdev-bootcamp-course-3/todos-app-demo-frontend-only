import { RxCross2 } from 'react-icons/rx';
import { BsCheckCircle } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';

const TodoListItem = ({ index, todo, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // handle toggle check button
  const handleToggle =() => {
    // todo.completed = !todo.completed; // this is wrong
    // todos[index].completed = !todos[index].completed; // this is wrong

    // find this particular todo from the list of todos
    // flip its completed field
    setTodos(todos.map((individualTodo, individualIndex) => {
      if (individualIndex === index) {
        return {
          ...individualTodo,
          completed: !individualTodo.completed
        }
      } else {
        return individualTodo;
      }
    }))
  }

  console.log(todos);

  return (
    <li style={{ position: 'relative' }}>
      <button style={{ position: 'absolute', left: 10 }} onClick={handleToggle}>
        {todo.completed ? (
          <BsCheckCircle color='green' size={25} />
        ) : (
          <BsCircle color='#e6e6e6' size={25} />
        )}
      </button>
      <label className={todo.completed && 'deleted'}>{todo.item}</label>
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
