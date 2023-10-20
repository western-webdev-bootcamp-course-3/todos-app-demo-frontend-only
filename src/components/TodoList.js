import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ul className='todo-list'>
      <TodoListItem text={'Learn React'} />
      <TodoListItem text={'Learn TypeScript'} />
    </ul>
  );
};

export default TodoList;
