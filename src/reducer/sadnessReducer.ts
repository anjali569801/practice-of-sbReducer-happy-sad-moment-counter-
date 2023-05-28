import { AnyAction } from "redux"
import { Moment } from "../store"
import { SAD_BUTTON_CLICKED } from "../actions/action"

export type sadState = {
sadMoment:Moment[],
}

export const initialSadState:sadState={
    sadMoment:[],
}

const sadnessReducer = (state:sadState,action:AnyAction)=>{
    switch(action.type){
        case "sad button clicked":
            console.log("state",state)
            return {...state,sadMoment:[...state.sadMoment,{intensity:action.payload.count,when:action.payload.when},],}
        default:
            return state;
    } 

}
 export default sadnessReducer;