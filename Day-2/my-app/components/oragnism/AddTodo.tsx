import React, { useState } from "react";
import { Button, Box } from "@mantine/core";
import InputField from "../atoms/InputField";
import { ItemProps, TodoListStateProps } from "@/types/type";

const AddTodo = ({ setTodosList }: TodoListStateProps) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    const newItem = { id: Math.floor(Math.random() * 100000), name: value };
    setTodosList((prev: ItemProps[]) => [...prev, newItem]);
    setValue("");
    fetch("/api/add-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
  };
  return (
    <Box className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <InputField
        value={value}
        setValue={setValue}
        handleClick={handleClick}
        placeholder={"Enter todo..."}
        size={"md"}
      />
      <Button
        onClick={handleClick}
        disabled={!value}
        variant="filled"
        color="blue"
      >
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
