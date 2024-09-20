import { useEffect, useState } from "react";
import "./test.css";
import Background from "three/src/renderers/common/Background.js";

export default function FrontModal(props) {
    const modalactive = props.active;
    const [modal , setModal] = useState(modalactive);
    useEffect(() =>  {
        setModal(modalactive) 
    },[modalactive])
    
   return (    
     <>
     <div className={modal ? "modal" :  "deactive"}>
      <h1>Hello WORD</h1>
     </div>
     </>
    )
}