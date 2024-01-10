import React, { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import state from "../store";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  const { camera } = useThree();

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    // easing.dampE(
    //   group.current.rotation,
    //   [state.pointer.y / 10, -state.pointer.x / 5, 0],
    //   0.25,
    //   delta
    // );
  });

  const handleZoom = (event) => {
    const zoomSpeed = 0.02;
    const newFOV = camera.fov + event.deltaY * zoomSpeed;

    // Limit the FOV to a specific range if needed
    const minFOV = 10;
    const maxFOV = 60;
    camera.fov = Math.min(Math.max(newFOV, minFOV), maxFOV);

    // Update the camera
    camera.updateProjectionMatrix();
  };

  return (
    <group ref={group}>
      <mesh onWheel={handleZoom}>{children}</mesh>
    </group>
  );
};

export default CameraRig;
