import './App.css';
import Header from './components/header/Header';
import AddTodo from './components/todolist/AddTodo';
import TaskList from './components/todolist/TaskList';
import Status from './components/todolist/Status';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="todo-list-app">
        <AddTodo />
        <Status />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
