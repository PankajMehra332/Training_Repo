interface AddTodoProps {
  todoItem: string;
  setTodoItem: (value: string) => void;
  handleAddTodo: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({
  todoItem,
  setTodoItem,
  handleAddTodo,
}) => {
  const handleClick = () => {
    handleAddTodo();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  return (
    <div style={AddTodoContainerStyle}>
      <div style={InputGroupStyle}>
        <input
          value={todoItem}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your todo..."
          style={{ padding: "1rem", borderRadius: "10px", width: "200px" }}
        />
        <button
          disabled={!todoItem}
          onClick={handleClick}
          style={{ background: "#422332", color: "white" }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};
export default AddTodo;

const AddTodoContainerStyle = {
  width: "500px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const InputGroupStyle = {
  display: "flex",
  gap: "2.5rem",
};
