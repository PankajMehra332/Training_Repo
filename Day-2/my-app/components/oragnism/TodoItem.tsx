import { ItemProps, TodoItemProps } from "@/types/type";
import { Box, Button, Paper, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const TodoItem: React.FC<TodoItemProps> = ({ item, deleteTodo, editTodo }) => {
  const [opened, { close, open }] = useDisclosure(false);
  const handleAddClick = (id: number) => {
    deleteTodo(id);
  };
  const handleEditClick = (item: ItemProps) => {
    editTodo(item);
  };

  return (
    <Paper shadow="md" p="sm" withBorder>
      <Box key={item?.id} className="md:flex md:justify-between items-center">
        <Popover
          width={150}
          position="bottom"
          withArrow
          shadow="md"
          opened={opened}
        >
          <Popover.Target>
            <Box onMouseEnter={open} onMouseLeave={close} maw={150}>
              <Text truncate="end">{item?.name}</Text>
            </Box>
          </Popover.Target>
          <Popover.Dropdown style={{ pointerEvents: "none" }}>
            <Text size="sm">{item?.name}</Text>
          </Popover.Dropdown>
        </Popover>
        <Box className="flex justify-between gap-2">
          <Button onClick={() => handleEditClick(item)}>Edit</Button>
          <Button onClick={() => handleAddClick(item?.id)}>Delete</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default TodoItem;
