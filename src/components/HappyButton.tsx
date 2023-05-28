import {FC,memo, useState} from "react";
import { useDispatch } from "react-redux";
import { HAPPY_BUTTON_CLICKED } from "../actions/action";
import H3 from "./H3";

type HappyButtonProps = {};

const HappyButton:FC<HappyButtonProps>= (props) =>{
   const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch();
    function happyIncreament() {
       dispatch(HAPPY_BUTTON_CLICKED(quantity,new Date()));
    }
    
  return (
     <div>
        <H3>are you happy?</H3>
        <input  type="number" value={quantity} onChange={(e)=>setQuantity(+e.target.value)} className="border border-black rounded-md p-2 m-2"/>
        <button onClick={happyIncreament} className="bg-green-700 p-2 rounded-md">yes</button>
     </div>
  );
};

HappyButton.defaultProps = {};
export default memo(HappyButton);