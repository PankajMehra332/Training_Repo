interface SearchInputProps {
  setSearchInput: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchInput }) => {
  return (
    <div style={inputContainer}>
      <div>
        <input
          placeholder="Search your todo..."
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ padding: "1rem", borderRadius: "10px", width: "350px" }}
        />
      </div>
    </div>
  );
};
export default SearchInput;

const inputContainer = {
  width: "500px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
