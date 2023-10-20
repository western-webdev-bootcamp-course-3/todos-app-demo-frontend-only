import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const Todos = () => {
  return (
    <div className='todos'>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default Todos;
