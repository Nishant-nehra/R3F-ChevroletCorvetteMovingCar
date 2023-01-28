import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";

const Car = () => {
	const carModel = useGLTF("./models/car/scene.gltf");
	useEffect(() => {
		carModel.scene.scale.set(0.005, 0.005, 0.005);
		carModel.scene.position.set(0, -0.035, 0);
		carModel.scene.traverse((object) => {
			if (object instanceof Mesh) {
				object.castShadow = true;
				object.receiveShadow = true;
				object.material.envMapIntensity = 20;
			}
		});
	}, [carModel]);

	useFrame((state, delta) => {
		let time = state.clock.getElapsedTime();

		let group = carModel.scene.children[0].children[0].children[0];
		group.children[0].rotation.x = time * 2;
		group.children[2].rotation.x = time * 2;
		group.children[4].rotation.x = time * 2;
		group.children[6].rotation.x = time * 2;
	});

	return (
		<>
			<primitive object={carModel.scene} />
		</>
	);
};

export default Car;
