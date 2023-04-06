import * as auth from "app/auth/redux/AuthRedux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export function Logout() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(auth.actions.logout());
		document.location.reload();
	}, [dispatch]);

	return <Route element={<Navigate to={`/auth/login`} />} />;
}
