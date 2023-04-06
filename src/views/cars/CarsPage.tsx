import React from "react";
import { Outlet } from "react-router-dom";

const Cars: React.FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default Cars;
