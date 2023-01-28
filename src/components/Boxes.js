import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Box = ({ color }) => {
	const box = useRef();
	const time = useRef(0);
	const [xRotSpeed] = useState(() => Math.random());
	const [yRotSpeed] = useState(() => Math.random());
	const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);

	const getInitialPosition = () => {
		let vec = new THREE.Vector3(
			(Math.random() * 2 - 1) * 3,
			Math.random() * 2.5 + 0.1,
			(Math.random() * 2 - 1) * 15
		);
		if (vec.x < 0) {
			vec.x -= 1.75;
		}
		if (vec.x > 0) {
			vec.x += 1.75;
		}

		return vec;
	};
	const [position, setPosition] = useState(getInitialPosition());

	const resetPosition = () => {
		let vec = new THREE.Vector3(
			(Math.random() * 2 - 1) * 3,
			Math.random() * 2.5 + 0.1,
			Math.random() * 10 + 10
		);
		if (vec.x < 0) {
			vec.x -= 1.75;
		}
		if (vec.x > 0) {
			vec.x += 1.75;
		}

		setPosition(vec);
	};

	useFrame(
		(state, delta) => {
			time.current += delta * 1.2;
			let newZ = position.z - time.current;

			if (newZ < -10) {
				resetPosition();
				time.current = 0;
			}

			box.current.position.set(position.x, position.y, newZ);
			box.current.rotation.x += delta * xRotSpeed;
			box.current.rotation.y += delta * yRotSpeed;
		},
		[xRotSpeed, yRotSpeed, position]
	);

	return (
		<mesh ref={box} rotation-x={Math.PI * 0.5} scale={scale} castShadow>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={color} envMapIntensity={0.15} />
		</mesh>
	);
};

const Boxes = () => {
	return (
		<>
			{[...Array(100)].map((val, index) => (
				<Box
					key={index}
					color={index % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
				/>
			))}
		</>
	);
};
export default Boxes;
