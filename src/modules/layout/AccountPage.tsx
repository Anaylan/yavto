import React from "react";
import { Outlet } from "react-router-dom";
import { AccountHeader } from "modules/layout/components/header/AccountHeader";

const AccountPage: React.FC = () => {
	return (
		<>
			<AccountHeader />
			<Outlet />
		</>
	);
};

export default AccountPage;
