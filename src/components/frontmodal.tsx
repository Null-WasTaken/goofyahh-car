import { useEffect, useState } from "react";
import { FaSkullCrossbones } from "react-icons/fa6";


export default function FrontModal(props) {
    const modalactive = props.active;
    const [modal , setModal] = useState(modalactive);
    useEffect(() =>  {
        setModal(modalactive) 
    },[modalactive]);
    
   return (    
     <>
     <div className={modal ? "modal" :  "deactive"}>
         <div className={"header-text"}>
             <div>hello</div>
             <h1>{props.data.header}</h1>
             <span><FaSkullCrossbones/></span>
         </div>
         <input type="text" id={"lable1"} placeholder={props.data.lable1}/>
         <input type="text" id={"lable2"} placeholder={props.data.lable2}/>
         <button>Submit</button>
     </div>
     </>
    )
}