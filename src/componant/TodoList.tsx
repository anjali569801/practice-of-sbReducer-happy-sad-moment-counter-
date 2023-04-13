import {FC,memo} from "react";
import Todo from "../models/Todo";
import Todorow from "./Todorow";

type TodoListProps = {
    todos: Todo[]
};

const TodoList:FC<TodoListProps>= ({todos}) =>{
  return (
     <div>
        {todos.map((t)=><Todorow todo={t}></Todorow>)}
     </div>
  );
};

TodoList.defaultProps = {};
export default memo(TodoList);