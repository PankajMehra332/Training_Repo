import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import SearchInput from "./components/SearchInput";
import TodosList from "./components/TodosList";

interface TodoItem {
  id: number;
  name: string;
}

function App() {
  const [todosList, setTodosList] = useState<TodoItem[]>([
    { id: 1, name: "do this" },
    { id: 2, name: "do that" },
    { id: 3, name: "do those" },
  ]);
  const [todoItem, setTodoItem] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddTodo = () => {
    const newItem = { id: Math.floor(Math.random() * 100000), name: todoItem };
    setTodosList([...todosList, newItem]);
    setTodoItem("");
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  const filterdTodo = todosList.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <div>
        <SearchInput setSearchInput={setSearchInput} />
        <AddTodo
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          handleAddTodo={handleAddTodo}
        />
        <TodosList todosList={filterdTodo} setTodosList={setTodosList} />
      </div>
    </div>
  );
}

export default App;
