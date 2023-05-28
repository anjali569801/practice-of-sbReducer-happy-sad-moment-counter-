import { AnyAction, createStore } from "redux";
//import { , SAD_BUTTON_CLICKED } from "./actions/action";
import sadnessReducer, { initialSadState, sadState } from "./reducer/sadnessReducer";
import happinessReducer, { happyState, initialHappyState } from "./reducer/happinessReducer";
 
export type Moment={
  intensity:number;
  when :Date;
}
export type State = {
  happy : happyState,
  sad: sadState,
};

const initialState:State={
  happy : initialHappyState,
  sad : initialSadState,
};

function reducer ( currentState = initialState, action:AnyAction):State {
  // switch (action.type){
   return{
    sad : sadnessReducer(currentState.sad,action),
    happy : happinessReducer(currentState.happy,action),
  }
  //   case "happy button clicked":{
  //     return {...currentState,happyMoment:[...(currentState.happyMoment), {intensity:action.payload,when:new Date()},],}
  //   }
  //   case "sad button clicked":{
  //    return{...currentState, sadMoment:[...currentState.sadMoment, {intensity:action.payload,when:new Date()},],}
  //   }
  //   default:
  //     return currentState;
    
  // }
//   if (action.type ==="happy button clicked")
// {
//   return {...currentState, happyCount: currentState.happyCount + action.payload};
// }
// else if(action.type ==="sad button clicked"){
//   return {...currentState, sadCount: currentState.sadCount + 1};
// }
//return currentState;
}
const store=createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
export default store

// import { createStore, Reducer } from "redux";
// import { TODO_ADD, TODO_DELETE, TODO_STATUS_CHANGE } from "./actions/todos";
// import Todo from "./models/Todo";

// export type State={
//     todos:Todo[]
// }

// const initialState:State={
//     todos:[{
//         id:1,
//         title:"bring milk",
//         done:false
//       },
//       {
//         id:2,
//         title:"complete assignment",
//         done:false
//       },{
//         id:3,
//         title:"bring curd",
//         done:false
//       },
//       {
//         id:4,
//         title:"complete work",
//         done:true
//       }]
// }
// const reducer:Reducer<State>=(state=initialState,action)=>{
//  switch (action.type){
//     case TODO_STATUS_CHANGE: {
//       const todoId =  action.payload;
//      const newTodos = state.todos.map(t=>{
//         if (t.id=== todoId){
//             return{...t,done:!t.done};
//         }
//         return t;
//      });

//       return {...state,todos:newTodos}
//     }
//     case TODO_ADD: {

//     }
//     case TODO_DELETE: {

//     }
//     default:
//         return state;
//  }
// };

// const store =createStore(reducer);
// export default store;