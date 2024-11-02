import {Canvas} from "@react-three/fiber";
import { Box, PerspectCamera } from '@react-three/drei'
import {OrbitControls} from "@react-three/drei";

function Environment(){
    return (
        <Canvas>
            <PerspectCamera  />
            <OrbitControls />
            <ambientLight />

            <Box>
                <meshStandardMaterial />
            </Box>
        </Canvas>
    )
}

export default Environment;