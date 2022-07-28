import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Funmoves from "./Models/funMoves";
import * as THREE from "three";

const Scene = () => {
  const [action, setAction] = useState("idle");

  return (
    <>
      <div className="w-full h-[500px]  p-0 m-0 bg-black rounded-b-[16%]">
        <Canvas alpha={true}>
          <ambientLight intensity={0.5} />
          <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
          <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
          <pointLight intensity={2} position={[0, 3, -10]} color="white" />
          <OrbitControls enableDamping={true} enableZoom={true} />

          <Suspense fallback={null}>
            <Funmoves action={action} />
          </Suspense>
        </Canvas>
      </div>
      <div className="controls flex flex-row justify-center items-center overflow-x-scroll">
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("idle")}
        >
          idle
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Rumba")}
        >
          Rumba
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Salsa")}
        >
         Salsa
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Samba")}
        >
          Samba
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Swing 1")}
        >
          Swing 1
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Swing 2")}
        >
          Swing 2
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("Swing 3")}
        >
          Swing 3
        </button>
        <button
          className="font-semibold m-4 bg-gray-400 p-2 rounded-2xl flex justify-center items-center"
          onClick={() => setAction("YMCA")}
        >
          YMCA
        </button>
        
      </div>
    </>
  );
};

export default Scene;
