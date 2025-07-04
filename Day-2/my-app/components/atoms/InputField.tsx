import React from "react";
import { Input, CloseButton } from "@mantine/core";

interface InputValue {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  size: string;
  handleClick: () => void;
}

const InputField: React.FC<InputValue> = ({
  value,
  setValue,
  placeholder,
  size,
  handleClick,
}) => {
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSectionPointerEvents="all"
      size={size}
      className="2xl:w-full"
      onKeyDown={(e) => handleKeyDown(e)}
      rightSection={
        <CloseButton
          aria-label="Clear input"
          onClick={() => setValue("")}
          style={{ display: value ? undefined : "none" }}
        />
      }
    />
  );
};

export default InputField;
