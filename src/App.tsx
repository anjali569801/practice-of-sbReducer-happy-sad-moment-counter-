import {FC,memo} from "react";
import H3 from "./components/H3";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo";
import {useSelector} from "react-redux"
import { completeTodoSelector, incompleteTodoSelector } from "./selectors/todos";


type AppProps = {};

const App:FC<AppProps>= (props) =>{
  const completeTodo:Todo[] =  useSelector(completeTodoSelector);
  const incompleteTodo:Todo[]= useSelector(incompleteTodoSelector);
  return (
     <div className="">
      <H3 className="mb-2">Things to do</H3>   
      <TodoList todos={incompleteTodo} ></TodoList>
      <H3 className="mb-2 mt-4">Things done</H3>
      <TodoList todos={completeTodo} ></TodoList>
     </div>
  );
};

App.defaultProps = {};
export default memo(App);