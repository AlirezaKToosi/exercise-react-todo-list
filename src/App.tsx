import TodoList from "./components/TodoList";
import "./style/App.css";

export function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}
