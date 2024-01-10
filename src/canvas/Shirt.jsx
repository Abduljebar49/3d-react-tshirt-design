import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef, useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const logoRef = useRef();
  const heartRef = useRef();

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    if (logoRef.current) {
      const mouseX = (state.mouse.x * window.innerWidth) / 2;
      const mouseY = (state.mouse.y * window.innerHeight) / 2;

      logoRef.current.position.x = (mouseX / window.innerWidth) * 2 - 1;
      logoRef.current.position.y = -(mouseY / window.innerHeight) * 2 + 1;
    }

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
        onClick={() => console.log("is full male")}
      >
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
