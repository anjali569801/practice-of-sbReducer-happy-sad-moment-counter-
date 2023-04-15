import {FC,memo} from "react";
import Todo from '../models/Todo'
import cn from 'classnames'

type TodorowProps = {
    todo:Todo
};

const Todorow:FC<TodorowProps>= ({todo}) =>{
    const {id,title,done} = todo
  return (
     <div className="flex">
        <input type="checkbox" checked={done}/>
        <p className={cn("ml-2",{"line-through":done})}>{title}</p>
     </div>
  );
};

Todorow.defaultProps = {};
export default memo(Todorow);