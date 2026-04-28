"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm"

function Particles(props: any) {
  const ref = useRef<any>()
  const sphere = useMemo(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }), [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t / 15
    ref.current.rotation.y = t / 20
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function Starfield() {
  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  )
}