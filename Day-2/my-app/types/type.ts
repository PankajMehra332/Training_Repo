import { Dispatch, SetStateAction } from "react";

export interface ItemProps {
    id: number;
    name: string;
}

export interface TodoItemProps {
   item:{
     id: number;
     name: string;
   };
   deleteTodo:(id:number)=>void;
   editTodo:(item:ItemProps)=>void
}

export interface TodoListProps{
    todosList:ItemProps[];
    setTodosList: Dispatch<SetStateAction<ItemProps[]>>;
}

export interface TodoListStateProps {
  setTodosList: Dispatch<SetStateAction<ItemProps[]>>;
}

export interface SearchTermProps {
  setSearchTerm: (searchTerm:string)=>void
}

export interface UpdateTodoProps {
  value: string;
  setValue: (updatedList:string) => void
  handleUpdate:()=>void;
}