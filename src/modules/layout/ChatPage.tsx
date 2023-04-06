import React from "react";
import { Outlet } from "react-router-dom";

const ChatPage: React.FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default ChatPage;
