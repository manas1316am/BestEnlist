
import React, {useState} from "react";

const TextField = () => {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val){
        setData(val.target.value)
    }
  return (
      <>
        {
            print ? <h1>{data}</h1> : null
        }
        <input type="text" onChange={getData} />
        <button onClick={() => setPrint(true)} >Print Value</button>
      </>
  ) 
};

export default TextField;
