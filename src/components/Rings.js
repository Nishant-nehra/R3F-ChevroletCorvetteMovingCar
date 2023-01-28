import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Rings = () => {
	const itemsRef = useRef([]);

	useFrame((state, delta) => {
		let elapsed = state.clock.getElapsedTime();

		for (let i = 0; i < itemsRef.current.length; i++) {
			let mesh = itemsRef.current[i];
			// 14 elements so i-7 to get [-7,6] and multiply by random number 3.5 to set distance
			let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
			let dist = Math.abs(z); //distance from origin ie 0

			mesh.position.set(0, 0, -z);
			mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

			let colorScale = 1;
			if (dist > 2) {
				colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
			}
			colorScale *= 0.5;

			if (i % 2) {
				mesh.material.emissive = new THREE.Color(6, 0.15, 0.7).multiplyScalar(
					colorScale
				);
			} else {
				mesh.material.emissive = new THREE.Color(0.1, 0.7, 3).multiplyScalar(
					colorScale
				);
			}
		}
	});

	return (
		<>
			{[...Array(14)].map((value, index) => (
				<mesh
					castShadow
					receiveShadow
					position={[0, 0, 0]}
					key={index}
					ref={(el) => (itemsRef.current[index] = el)}
				>
					<torusGeometry args={[3.35, 0.05, 16, 100]} />
					<meshStandardMaterial emissive={[4, 0.1, 0.4]} color={[0, 0, 0]} />
				</mesh>
			))}
		</>
	);
};

export default Rings;
