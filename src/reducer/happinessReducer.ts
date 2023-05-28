import { AnyAction } from "redux"
import { Moment } from "../store"
import { HAPPY_BUTTON_CLICKED} from "../actions/action"

export type happyState = {
happyMoment:Moment[],
}

export const initialHappyState:happyState={
    happyMoment:[],
}

const happinessReducer = (state:happyState,action:AnyAction)=>{
    switch(action.type){
        case "happy button clicked":
            console.log("state",state)
            return {...state,happyMoment:[...state.happyMoment,{intensity:action.payload.count,when:action.payload.when},],}
        default:
            return state;
    } 

}
 export default happinessReducer;