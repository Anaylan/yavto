import App from "App";
import * as _redux from 'app/';
import store, { persistor } from "app/redux/Store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "reportWebVitals";

import "assets/sass/style.scss";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
// import "assets/sass/style.react.scss";
// import "assets/css/style.bundle.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

_redux.setupAxios(axios, store)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<div>Loading...</div>}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
