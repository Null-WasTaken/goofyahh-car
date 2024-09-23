import React, { act, useRef , useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import Front from './components/front/front';
import Roof from "./components/roof/roof.jsx";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/lamborgini_urus.glb')

  return (
    <group  dispose={null}>
      <group position={[2.344, 0.976, 3.885]} scale={0.404}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.TiresGum}
          position={[-0.329, 0.003, 0.013]}
          scale={0.093}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Universal_Wheel}
          position={[-0.315, 0.003, 1.055]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.061}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.BreakDiscs}
          position={[-0.143, 0.003, 0.013]}
          scale={0.093}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.RimsChrome}
          position={[-0.125, -0.027, -0.021]}
          scale={0.093}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Chrome}
          position={[0.173, 0.003, 0.013]}
          scale={0.093}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Chrome}
          position={[-0.129, 0.003, 0.013]}
          scale={0.093}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Universal_Wheel}
          position={[-0.329, 0.003, 0.013]}
          scale={0.061}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Logo}
          position={[-0.154, 0.037, 0.009]}
          rotation={[-Math.PI / 2, 0.874, -Math.PI / 2]}
          scale={0.049}
        />
      </group>
      <group position={[-2.451, 0.975, 3.89]} scale={0.495}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.TiresGum}
          position={[0.484, 0.004, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Universal_Wheel}
          position={[0.496, 0.004, 0.851]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.049}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.BreakDiscs}
          position={[0.332, 0.004, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.RimsChrome}
          position={[0.318, -0.02, 0.027]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.Chrome}
          position={[0.074, 0.004, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Chrome}
          position={[0.321, 0.004, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.076}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Universal_Wheel}
          position={[0.484, 0.004, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.049}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Logo}
          position={[0.35, 0.017, 0]}
          rotation={[-Math.PI / 2, 0.841, -Math.PI / 2]}
          scale={[-0.04, 0.04, 0.04]}
        />
      </group>
      <group position={[-2.456, 0.964, -3.369]} scale={0.519}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.TiresGum}
          position={[0.473, 0.025, -0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.Universal_Wheel}
          position={[0.462, 0.025, -0.816]}
          scale={[0.05, 0.047, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.BreakDiscs}
          position={[0.319, 0.025, -0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.RimsChrome}
          position={[0.304, 0.002, 0.023]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.Chrome}
          position={[0.057, 0.025, -0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.Chrome}
          position={[0.308, 0.025, -0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.Universal_Wheel}
          position={[0.473, 0.025, -0.004]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.05, 0.047, 0.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.Logo}
          position={[0.345, 0.036, -0.003]}
          rotation={[-Math.PI / 2, 0.841, -Math.PI / 2]}
          scale={[-0.038, 0.038, 0.038]}
        />
      </group>
      <group position={[2.405, 0.976, -3.378]} scale={0.337}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.TiresGum}
          position={[-0.574, 0.001, 0.02]}
          scale={[0.119, 0.112, 0.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Universal_Wheel}
          position={[-0.592, 0.001, -1.229]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.BreakDiscs}
          position={[-0.337, 0.001, 0.02]}
          scale={[0.119, 0.112, 0.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.RimsChrome}
          position={[-0.314, -0.034, -0.021]}
          scale={[0.119, 0.112, 0.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Chrome}
          position={[0.066, 0.001, 0.02]}
          scale={[0.119, 0.112, 0.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Chrome}
          position={[-0.319, 0.001, 0.02]}
          scale={[0.119, 0.112, 0.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.Universal_Wheel}
          position={[-0.574, 0.001, 0.02]}
          scale={[0.077, 0.073, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Logo}
          position={[-0.364, 0.042, 0.005]}
          rotation={[-Math.PI / 2, 0.874, -Math.PI / 2]}
          scale={0.058}
        />
      </group>
      <group position={[0.025, 4.079, -1.188]} scale={0.753}>
        <group
          position={[-0.037, -2.535, 2.677]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_169.geometry}
            material={materials.WhiteCar}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_170.geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials['Material.004']}
          position={[-0.089, -2.701, -5.912]}
          rotation={[1.861, 0, 0]}
          scale={[0.409, 0.205, 0.205]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials.LightsGlassFront}
          position={[0.007, -2.626, 8.891]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials.LightsGlassFront}
          position={[-0.034, -1.571, 3.732]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials.Glass}
          position={[-0.026, -1.138, 0.325]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials.LightsGlassFront}
          position={[-0.061, -1.952, -5.185]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.LightsGlassBack}
          position={[-0.034, -3.608, -5.318]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials.BlackPaint}
          position={[-0.034, -1.933, -5.599]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.GreyElements}
          position={[-0.034, -3.146, 2.324]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.GreyElements}
          position={[-0.034, -2.32, 5.529]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.GreyElements}
          position={[-0.034, -4.441, 2.464]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.GreyElements}
          position={[-0.034, -3.765, -5.242]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.GreyElements}
          position={[-0.034, -3.323, 9.723]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials.GreyElements}
          position={[-0.034, -1.042, 1.053]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.Mirror}
          position={[-0.036, -1.529, 3.353]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_101.geometry}
          material={materials.RimsChrome}
          position={[-0.036, -1.529, 3.353]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_103.geometry}
          material={materials.GreyElements}
          position={[-0.034, -4.198, 9.239]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_105.geometry}
          material={materials.BreakDiscs}
          position={[-0.034, -2.632, 8.915]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_107.geometry}
          material={materials.Default_Material}
          position={[2.554, -2.553, 8.467]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -2.747, 8.879]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials.LightsFrontLed}
          position={[-0.034, -2.658, 8.84]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials.material}
          position={[-0.034, -2.579, 8.376]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials.BlackPaint}
          position={[2.602, -1.997, -4.837]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_117.geometry}
          material={materials.BlackPaint}
          position={[2.417, -2.037, -5.054]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials.emitbrake}
          position={[-0.034, -1.972, -5.187]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_121.geometry}
          material={materials.BreakDiscs}
          position={[-0.034, -2.007, -4.585]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_123.geometry}
          material={materials.BlackPaint}
          position={[1.741, -1.822, -5.378]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_125.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -2.625, 8.871]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_127.geometry}
          material={materials.Default_Material}
          position={[-2.622, -2.553, 8.467]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_129.geometry}
          material={materials.Chrome}
          position={[-0.034, -2.618, 8.878]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_131.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -2.11, -4.969]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_133.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -1.885, -5.13]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_135.geometry}
          material={materials.BlackPaint}
          position={[-2.67, -1.997, -4.837]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_137.geometry}
          material={materials.BlackPaint}
          position={[-2.485, -2.037, -5.054]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_139.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -2.021, -4.823]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_141.geometry}
          material={materials.BreakDiscs_1}
          position={[-0.034, -1.871, -5.423]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_143.geometry}
          material={materials.BlackPaint}
          position={[-1.809, -1.822, -5.378]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials.material}
          position={[-0.034, -1.571, 3.731]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_147.geometry}
          material={materials.GreyElements}
          position={[-0.035, -3.645, -5.919]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_149.geometry}
          material={materials.FrameBlack}
          position={[-0.034, -1.963, -0.714]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_151.geometry}
          material={materials.BreakDiscs}
          position={[-0.04, -1.94, -5.748]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_153.geometry}
          material={materials.ChromeBLurred}
          position={[-0.034, -4.131, 1.932]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_155.geometry}
          material={materials.BreaksRedPaint}
          position={[-0.034, -3.608, -5.293]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_157.geometry}
          material={materials.ChromeBLurred}
          position={[-0.034, -4.098, -5.518]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_159.geometry}
          material={materials.Logo}
          position={[-0.03, -2.738, 9.949]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_161.geometry}
          material={materials['Material.002']}
          position={[-0.037, -2.535, 2.677]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_163.geometry}
          material={materials['Material.001']}
          position={[-0.037, -2.535, 2.677]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={0.05}
        />
        <Front props={props} />
        <Roof/>
      </group>
    </group>
  )
}

useGLTF.preload('/lamborgini_urus.glb')