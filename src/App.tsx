import {FC,memo} from "react";
import H3 from "./componant/H3";
import TodoList from "./componant/TodoList";
import Todorow from "./componant/Todorow";

type AppProps = {};

const App:FC<AppProps>= (props) =>{
  const product=[{
    id:1,
    title:"bring milk",
    done:true
  },
  {
    id:2,
    title:"complete assignment",
    done:false
  }]
  return (
     <div className="">
      <H3 className="mb-2">Things to do</H3>   
      <TodoList todos={product} ></TodoList>
      <H3 className="mb-2 mt-4">Things done</H3>
     </div>
  );
};

App.defaultProps = {};
export default memo(App);