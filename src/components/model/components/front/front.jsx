import React from "react";
import { useState , useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import FrontModal from "../../../frontmodal.tsx";


export default function Front(props) {
    const { nodes, materials } = useGLTF('/lamborgini_urus.glb')
    const [active , setActive]  = useState(false);
    const ref = useRef(null);
    const data= {
        header:"Front",
        lable1: "Front damage",
        lable2: "Front Cost",
    }

      useFrame(() => {
        if (active === true) {
          for (let index = ref.current.position.y; index < -2.235 ; index++) {
            ref.current.position.y += 0.004;
           }
        } else {  
          for (let i = ref.current.position.y; i >= -2.535; i--) {
            ref.current.position.y += -0.004; 
          }
        }
     })
     
    return (
      <>
      <Html>
        <FrontModal active={active} data={data}/>
      </Html>
        <mesh
          ref={ref}
          onClick={() => {setActive(!active);}}
          castShadow
          receiveShadow
          geometry={nodes.Object_165.geometry}
          material={materials.WhiteCar}
          position={[-0.037, -2.535, 2.677]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />

      </>

    )
}