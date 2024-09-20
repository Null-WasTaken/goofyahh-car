import {Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Model3d from "./components/model/model3d"
import { Suspense } from "react";
import FrontModal from "./components/model/components/front/components/frontmodal";

function App() {
  

  return (
    <>
    <Canvas>
      <ambientLight></ambientLight>
      <Suspense fallback={null}>
        <Model3d/>
        <meshStandardMaterial/>
       </Suspense>
       <OrbitControls/>
       <Environment preset="night"></Environment>
    </Canvas>

    </>
  )
}

export default App
