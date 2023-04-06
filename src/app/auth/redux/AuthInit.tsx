import { getUserByToken } from "api/AuthCRUD";
import { RootState } from "app/redux/RootReducer";
import { LayoutSplashScreen } from "modules/layout/core";
import { FC, useEffect, useRef, useState } from "react";
import {
	connect, ConnectedProps, shallowEqual, useDispatch, useSelector
} from "react-redux";
import * as auth from "./AuthRedux";

const mapState = (state: RootState) => ({ auth: state.auth });
const connector = connect(mapState, auth.actions);
type PropsFromRedux = ConnectedProps<typeof connector>;

const AuthInit: FC<PropsFromRedux> = (props, { children }) => {
	const didRequest = useRef(false);
	const dispatch = useDispatch();
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const accessToken = useSelector<RootState>(
		({ auth }) => auth.title,
		shallowEqual
	);

	// We should request user by authToken before rendering the application
	useEffect(() => {
		const requestUser = async () => {
			try {
				if (!didRequest.current) {
					const { data: user } = await getUserByToken();
					dispatch(props.fulfillUser(user));
				}
			} catch (error) {
				console.error(error);
				if (!didRequest.current) {
					dispatch(props.logout());
				}
			} finally {
				setShowSplashScreen(false);
			}

			return () => (didRequest.current = true);
		};

		if (accessToken) {
			requestUser();
		} else {
			dispatch(props.logout());
			setShowSplashScreen(false);
		}
		// eslint-disable-next-line
	}, []);

	return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};

export default connector(AuthInit);
