const Lights = () => {
	return (
		<>
			<spotLight
				castShadow
				color={[1, 0.25, 0.7]}
				intensity={1.5}
				angle={0.6}
				penumbra={0.5}
				position={[5, 5, 0]}
				shadow-bias={-0.0001}
			/>
			<spotLight
				castShadow
				color={[0.14, 0.5, 1]}
				intensity={2}
				angle={0.6}
				penumbra={0.5}
				position={[-5, 5, 0]}
				shadow-bias={-0.0001}
			/>
		</>
	);
};

export default Lights;
