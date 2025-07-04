import { Box, Modal } from "@mantine/core";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { ItemProps, TodoListProps } from "@/types/type";
import { useDisclosure } from "@mantine/hooks";
import EditTodo from "./EditTodo";

const TodoList: React.FC<TodoListProps> = ({ todosList, setTodosList }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string>("");
  const [editingTodo, setEditingTodo] = useState<ItemProps | null>(null);

  const deleteTodo = async (id: number) => {
    const newList: ItemProps[] = todosList.filter((item) => id !== item?.id);
    setTodosList(newList);
    const res = await fetch(`/api/delete-todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
  };

  const editTodo = (item: ItemProps) => {
    open();
    setValue(item?.name);
    setEditingTodo(item);
  };

  const handleUpdate = async () => {
    const updatedList: ItemProps[] = todosList.map((item) =>
      item?.id === editingTodo?.id ? { ...item, name: value } : item
    );
    setTodosList(updatedList);
    const res = await fetch(`/api/edit-todo/${editingTodo?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
    close();
  };
  console.log(value, "value");
  return (
    <Box className="flex flex-col gap-4 overflow-y-scroll max-h-80 p-8">
      {todosList.map((item: ItemProps) => (
        <TodoItem
          key={item?.id}
          item={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
      <Modal opened={opened} onClose={close} title="Edit Todo" centered>
        <EditTodo
          value={value}
          setValue={setValue}
          handleUpdate={handleUpdate}
        />
      </Modal>
    </Box>
  );
};

export default TodoList;
