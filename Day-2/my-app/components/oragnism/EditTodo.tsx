import { Box, Button } from "@mantine/core";
import React, { useState } from "react";
import InputField from "../atoms/InputField";
import { UpdateTodoProps } from "@/types/type";

const EditTodo: React.FC<UpdateTodoProps> = ({
  value,
  setValue,
  handleUpdate,
}) => {
  const handleClick = () => {
    handleUpdate();
  };
  return (
    <Box className="flex flex-col gap-4">
      <InputField
        value={value}
        setValue={setValue}
        placeholder={"Edit your todo..."}
        size={"md"}
        handleClick={() => {}}
      />
      <Button onClick={handleClick}>Update Todo</Button>
    </Box>
  );
};

export default EditTodo;
