import { produce } from "immer";
import {FC,memo} from "react";
// import H3 from "./components/H3";
// import TodoList from "./components/TodoList";
// import Todo from "./models/Todo";
import {useSelector} from "react-redux"
import HappyButton from "./components/HappyButton";
import HappyIncrementor from "./components/HappyIncrementor";
import SadButton from "./components/SadButton";
import SadIncreamentor from "./components/SadIncreamentor";
//import { completeTodoSelector, incompleteTodoSelector } from "./selectors/todos";


type AppProps = {};

const App:FC<AppProps>= (props) =>{
  const a ={ name:"suresh", bestFriends:["ramesh","jignesh"],hobbies:["singing","cooking"]};
 console.log("a pehle",a)
  const b = JSON.parse(JSON.stringify(a));
console.log("b pehle is",b)
 b.hobbies.push('reading')
 console.log("b is",b)
const c = {...a,hobbies:[...(a.hobbies),"dancing"]}
console.log("c",c);
//const d = a;
//d.hobbies.push("writing")
const e = produce(a,(draft)=>{
  draft.hobbies.push("playing")
})
console.log("a bad",a)
//console.log("d is",d)

 console.log("a and b", a===b, a.bestFriends===b.bestFriends, a.hobbies=== b.hobbies)
 console.log("a and c", a===c, a.bestFriends===c.bestFriends, a.hobbies=== c.hobbies)
 //console.log("a and d", a===d, a.bestFriends===d.bestFriends, a.hobbies=== d.hobbies)
 console.log("a and e", a===e, a.bestFriends===e.bestFriends, a.hobbies=== e.hobbies)

console.log(a.hobbies)
console.log(b.hobbies)
console.log(c.hobbies)
//console.log(d.hobbies)
 console.log(e.hobbies)

  // const completeTodo:Todo[] =  useSelector(completeTodoSelector);
  // const incompleteTodo:Todo[]= useSelector(incompleteTodoSelector);
  return (
     <div className="m-5">
      <HappyIncrementor/>
      <SadIncreamentor/>
      <HappyButton/>
      <SadButton/>
      {/* <H3 className="mb-2">Things to do</H3>   
      <TodoList todos={incompleteTodo} ></TodoList>
      <H3 className="mb-2 mt-4">Things done</H3>
      <TodoList todos={completeTodo} ></TodoList> */}
     </div>
  );
};

App.defaultProps = {};
export default memo(App);