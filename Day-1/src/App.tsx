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
  const [todosList, setTodosList] = useState<TodoItem[]>([]);
  const [todoItem, setTodoItem] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddTodo = () => {
    const newItem = { id: Math.floor(Math.random() * 100000), name: todoItem };
    setTodosList([...todosList, newItem]);
    fetch("/api/add-todo", {
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      body: JSON.stringify(newItem)
    }).then((res)=>res.json()).then((data)=>{
      console.log(data, 'data');
    })
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

  useEffect(()=>{
    fetch("/api/get-todos").then((res)=>res.json()).then((data)=>{
      setTodosList(data);
    })
  },[]);

  return (
    <div className="main-container">
      <div className="child-container">
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
