import {FC,memo} from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "../selectors/CountSelector";

type SadIncreamentorProps = {};

const SadIncreamentor:FC<SadIncreamentorProps>= (props) =>{
    const sadCount = useSelector(sadCountSelector)
    console.log("sad",sadCount)
  return <div className="bg-red-700 p-2"><div>{sadCount.map(m =><div><>sad moment:{m.intensity}  when:{m.when.toISOString()}</></div>)}</div></div>; }

SadIncreamentor.defaultProps = {};
export default memo(SadIncreamentor);
