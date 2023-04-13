import {FC,memo} from "react";
import Todorow from "./componant/Todorow";

type AppProps = {};

const App:FC<AppProps>= (props) =>{
  const product={
    id:1,
    title:"bring milk",
    done:true
  }
  return (
     <div className="">
      <Todorow todo={product} ></Todorow>
     </div>
  );
};

App.defaultProps = {};
export default memo(App);