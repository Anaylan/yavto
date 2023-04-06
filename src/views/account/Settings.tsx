import React from "react";
import {
	ProfileDetails,
	SignInMethod,
	DeactivateAccount,
} from "modules/partials";
import { UserModel } from "app/models/user/UserModel";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "app/redux/RootReducer";

const Settings: React.FC = () => {
	const user: UserModel = useSelector<RootState>(
		({ auth }) => auth.user,
		shallowEqual
	) as UserModel;

	return (
		<>
			<ProfileDetails user={user} />
			<SignInMethod />
			<DeactivateAccount />
		</>
	);
};

export default Settings;
