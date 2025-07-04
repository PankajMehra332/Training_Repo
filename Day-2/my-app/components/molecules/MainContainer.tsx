import { Box, Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import SearchInput from "../oragnism/SearchInput";
import AddTodo from "../oragnism/AddTodo";
import TodoList from "../oragnism/TodoList";
import { ItemProps } from "@/types/type";

const MainContainer = () => {
  const [todosList, setTodosList] = useState<ItemProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const filteredTodos = todosList?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/get-todos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodosList(data);
    } catch (error) {
      setTodosList([]);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      fluid={true}
      className="p-2 flex justify-center item-center w-full"
    >
      <Box className="flex flex-col gap-8 mt-8">
        <SearchInput setSearchTerm={setSearchTerm} />
        <AddTodo setTodosList={setTodosList} />
        {loading && <Box className="text-center">Fetching todos...</Box>}
        <TodoList todosList={filteredTodos} setTodosList={setTodosList} />
      </Box>
    </Container>
  );
};

export default MainContainer;
