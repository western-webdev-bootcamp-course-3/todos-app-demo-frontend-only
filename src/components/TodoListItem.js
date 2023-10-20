import { RxCross2 } from 'react-icons/rx';

const TodoListItem = ({text}) => {
  return (
    <li style={{ position: 'relative' }}>
      <label>{text}</label>
      <button
        style={{ position: 'absolute', right: 10 }}
      >
        <RxCross2 color='#cc9a9a' />
      </button>
    </li>
  );
};

export default TodoListItem;
