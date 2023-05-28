import { State } from "../store";

export const happyCountSelector =(s:State)=>s.happy.happyMoment;
    

export const sadCountSelector =(s:State)=> s.sad.sadMoment;


