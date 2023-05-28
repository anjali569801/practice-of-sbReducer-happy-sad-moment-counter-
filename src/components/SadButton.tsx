import {FC,memo, useState} from "react";
import { useDispatch } from "react-redux";
import {SAD_BUTTON_CLICKED } from "../actions/action";
import H3 from "./H3";
import HappyIncrementor from "./HappyIncrementor";

type SadButtonProps = {};

const SadButton:FC<SadButtonProps>= (props) =>{
   const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const happyIncreament = () => {
       dispatch(SAD_BUTTON_CLICKED(quantity,new Date()));
    }
    
  return (
     <div>
        <H3>are you sad?</H3>
        <input type="number" value={quantity} onChange={(e)=>setQuantity(+e.target.value)} className="border border-black rounded-md p-2 m-2"/>
        <button onClick={happyIncreament} className="bg-red-700 p-2 rounded-md">yes</button>
     </div>
  );
};

SadButton.defaultProps = {};
export default memo(SadButton);