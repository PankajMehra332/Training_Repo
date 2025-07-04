import React, { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import InputField from "../atoms/InputField";
import { SearchTermProps } from "@/types/type";

const SearchInput = ({ setSearchTerm }: SearchTermProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const id = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <Box className="mt-2">
      <InputField
        value={value}
        setValue={setValue}
        placeholder={"Search your todo..."}
        size={"md"}
        handleClick={() => {}}
      />
    </Box>
  );
};

export default SearchInput;
