import { Canvas, useFrame } from "@react-three/fiber"
import Herotext from "../components/Herotext"
import ParallaxBackground from "../components/ParallaxBackground"
import { Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"
import { Suspense, lazy } from "react"
import Loader from "../components/Loader"

// Lazy load the heavy 3D model
const Astronaut = lazy(() => import("../components/Astronaut").then(module => ({ default: module.Astronaut })));

const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:853})
  return (
    < section id="home" className="flex items-start justify-center 
    md:items-start md:justify-start min-h-screen overflow-hidden 
    c-space">
        <Herotext />
        <ParallaxBackground/>
        <figure 
        className="absolute inset-0"
        style={{width: "100vw", height: "100vh"}}
        >
            <Canvas camera={{position: [0, 1, 3]}}>
                <Suspense fallback = {<Loader />}>
                <Float>
                <Astronaut scale={isMobile && 0.23} 
                position={isMobile && [0, -1.5, 0]} />
                </Float>
                <Rig />
                </Suspense>
            </Canvas>
        </figure>
        </section>
  )
}

function Rig(){
    return useFrame((state, delta) => {
          easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    })
}

export default Hero