import {FC,memo} from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "../selectors/CountSelector";

type HappyIncrementorProps = {};

const HappyIncrementor:FC<HappyIncrementorProps>= (props) =>{
const happyCount = useSelector(happyCountSelector)

  return (
     <div className="bg-green-700 p-2">
        <div>{happyCount.map(m=> <div><>happy moment:{m.intensity} , when:{m.when.toISOString()}</> </div>)}</div>
     </div>
  );
};

HappyIncrementor.defaultProps = {};
export default memo(HappyIncrementor);
