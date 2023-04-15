import { createStore, Reducer } from "redux";
import { TODO_ADD, TODO_DELETE, TODO_STATUS_CHANGE } from "./actions/todos";
import Todo from "./models/Todo";

export type State={
    todos:Todo[]
}

const initialState:State={
    todos:[{
        id:1,
        title:"bring milk",
        done:true
      },
      {
        id:2,
        title:"complete assignment",
        done:false
      },{
        id:3,
        title:"bring curd",
        done:false
      },
      {
        id:4,
        title:"complete work",
        done:true
      }]
}
const reducer:Reducer<State>=(state=initialState,action)=>{
 switch (action.type){
    case TODO_STATUS_CHANGE: {
      const todoId =  action.payload;
     const newTodos = state.todos.map(t=>{
        if (t.id=== todoId){
            return{...t,done:!t.done};
        }
        return t;
     });

      return {...state,todos:newTodos}
    }
    case TODO_ADD: {

    }
    case TODO_DELETE: {

    }
    default:
        return state;
 }
};

const store =createStore(reducer);
export default store;