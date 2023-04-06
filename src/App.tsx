import { AppRoute } from "./router/AppRoute";

import { LayoutProvider } from "modules/layout/core";

function App() {
	return (
		<>
			<LayoutProvider>
				<AppRoute />
			</LayoutProvider>
		</>
	);
}

export default App;
