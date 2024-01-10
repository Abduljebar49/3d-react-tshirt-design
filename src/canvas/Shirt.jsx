import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef, useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import * as THREE from 'three';
const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const logoRef = useRef();
  const heartRef = useRef();
  const [frameState,setFrameState] = useState()
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState([0, 0]);
  const { size, camera } = useThree();
  const handleLogoDragStart = (event) => {
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleLogoDrag = (event) => {
    if (isDragging && logoRef.current && heartRef.current) {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;

      // Calculate mouse position relative to the canvas size
      const mouseX = (clientX / size.width) * 2 - 1;
      const mouseY = -(clientY / size.height) * 2 + 1;

      // Create a vector with the mouse coordinates in normalized device space
      const mouseVector = new THREE.Vector3(mouseX, mouseY, 0.5);
      
      // Unproject the mouse vector into world space
      mouseVector.unproject(camera);

      // Calculate the logo's scale in the scene
      const scale = new THREE.Vector3();
      heartRef.current.getWorldScale(scale);

      // Adjust the mouseVector based on logo's scale to maintain its size
      mouseVector.sub(heartRef.current.position).divide(scale).add(heartRef.current.position);

      logoRef.current.position.copy(mouseVector);
    }
  };
  

  const handleLogoDragEnd = () => {
    setIsDragging(false);
  };

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    setFrameState(state);
    if (snap.rotating && heartRef.current) {
      const rotationSpeed = delta * 0.5;
      heartRef.current.rotation.y += rotationSpeed;
    }
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        ref={heartRef}
        dispose={null}
        onPointerDown={handleLogoDragStart} // Start dragging
        onPointerMove={handleLogoDrag} // Dragging in progress
        onPointerUp={handleLogoDragEnd} // End dragging
      >
        {/* onClick={() => console.log("is full male")} */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            ref={logoRef}
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
            onClick={() => console.log("Logo clicked")}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
