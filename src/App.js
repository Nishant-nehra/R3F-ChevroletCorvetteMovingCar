import { CubeCamera, Environment, OrbitControls } from "@react-three/drei";
import {
	Bloom,
	ChromaticAberration,
	EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Boxes from "./components/Boxes";
import Car from "./components/Car";
import Ground from "./components/Ground";
import Lights from "./components/Lights";
import Rings from "./components/Rings";

function App() {
	return (
		<>
			<color args={[0, 0, 0]} attach="background" />
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<Lights />
			<Ground />
			<Boxes />
			<Rings />
			<CubeCamera resolution={256} frames={Infinity}>
				{(texture) => (
					<>
						<Environment map={texture} />
						<Car />
					</>
				)}
			</CubeCamera>
			<EffectComposer>
				<Bloom
					blendFunction={BlendFunction.ADD}
					intensity={1.3} // The bloom intensity.
					width={300} // render width
					height={300} // render height
					kernelSize={5} // blur kernel size
					luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
					luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
				/>
				<ChromaticAberration
					blendFunction={BlendFunction.NORMAL} // blend mode
					offset={[0.0005, 0.0012]} // color offset
				/>
			</EffectComposer>
		</>
	);
}

export default App;
