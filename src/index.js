import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Suspense fallback={null}>
		<Canvas
			shadows
			camera={{
				fov: 50,
				near: 0.1,
				far: 200,
				position: [3, 2, 5],
			}}
		>
			<App />
		</Canvas>
	</Suspense>
);
