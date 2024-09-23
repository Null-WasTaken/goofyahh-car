import { useEffect, useState } from "react";

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