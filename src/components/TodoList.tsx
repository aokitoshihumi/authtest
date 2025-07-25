import React from "react";
import { Todo } from "@/types";
import { Checkbox } from "@mui/material";
import { uuid } from "uuidv4";

type todoListProps = {
    todoList: Todo[];
}

export default function TodoList({ todoList }: todoListProps) {
  
  return (
    <div>
      {todoList.map((list) => {
        return(
        <div className="flex justify-center items-center">
            {list.content}
            <Checkbox />
        </div>
        
      )})}
    </div>
  );
}
