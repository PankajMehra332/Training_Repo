interface TodoItem {
  id: number;
  name: string;
}

interface TodosItemList {
  todosList: TodoItem[];
  setTodosList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodosList: React.FC<TodosItemList> = ({ todosList, setTodosList }) => {
  const handleClick = (id: number) => {
    const newList: TodoItem[] = todosList.filter(
      (item: TodoItem) => item?.id !== id
    );
    setTodosList(newList);
  };

  return (
    <div style={todosListStyle}>
      <div style={{ width: "77%" }}>
        {todosList?.map((item) => (
          <div key={item?.id} style={todoItemStyle}>
            <h5 style={todoNameStyle}>{item?.name}</h5>
            <button
              style={{ background: "#422332", color: "white" }}
              onClick={() => handleClick(item?.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodosList;

const todosListStyle = {
  width: "500px",
  display: "flex",
  justifyContent: "center",
  height: "400px",
  overflow: "auto",
};

const todoItemStyle = {
  display: "flex",
  padding: "0rem",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
};

const todoNameStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
