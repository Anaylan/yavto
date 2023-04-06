import { AuthPage, Logout } from "app/auth";
import { RootState } from "app/redux/RootReducer";
import { toAbsoluteUrl } from "modules/helpers";
import { MasterLayout } from "modules/layout/MasterLayout";
import { lazy, Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from "react-router-dom";

// errors
const ErrorsPage = lazy(() => import("views/ErrorsPage"));

const Error404 = lazy(() => import("views/errors/Error404"));

const Error500 = lazy(() => import("views/errors/Error500"));

// cars
const Cars = lazy(() => import("views/cars/CarsPage"));

// finances
const Finances = lazy(() => import("views/finances/FinancesPage"));

// reviews
const Reviews = lazy(() => import("views/review/ReviewPage"));

// auth
const Login = lazy(() => import("views/auth/Login"));
const Registration = lazy(() => import("views/auth/Registration"));
const ForgotPassword = lazy(() => import("views/auth/ForgotPassword"));

// chats
const ChatPage = lazy(() => import("modules/layout/ChatPage"));
const Private = lazy(() => import("views/chat/Private"));
const Group = lazy(() => import("views/chat/Group"));
const Drawer = lazy(() => import("views/chat/Drawer"));

// account
const AccountPage = lazy(() => import("modules/layout/AccountPage"));
const Overview = lazy(() => import("views/account/Overview"));
const Settings = lazy(() => import("views/account/Settings"));

// const ProfilePage = React.lazy(() => import("modules/profile/ProfilePage"));
// const WizardsPage = React.lazy(() => import("modules/wizards/WizardsPage"));
const DashboardWrapper = lazy(() => import("views/DashboadPage"));

export const ROOT_URL = "";

export const { PUBLIC_URL } = process.env;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path={`/*`}>
				{/* Render auth page when user at `/auth/login` and not authorized.*/}
				<Route element={<MasterLayout />}>
					<Route index element={<DashboardWrapper />} />
					<Route path='reviews' element={<Reviews />} />
					<Route path='finances' element={<Finances />} />
					<Route path='account/*' element={<AccountPage />}>
						<Route path='overview' element={<Overview />} />
						<Route path='settings' element={<Settings />} />
					</Route>
					<Route path='cars/*'>
						<Route element={<Cars />} />
						<Route path='add' element={<Overview />} />
					</Route>

					<Route path='chat/*' element={<ChatPage />}>
						<Route path='private-chat' element={<Private />} />
						<Route path='group-chat' element={<Group />} />
						<Route path='drawer-chat' element={<Drawer />} />
					</Route>
					<Route path='*' element={<Navigate replace to={"/error/404"} />} />
				</Route>
				<Route path='auth/*' element={<AuthPage />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='forgot-password' element={<ForgotPassword />} />
					<Route path='*' element={<Navigate replace to={"/error/404"} />} />
				</Route>
			</Route>

			<Route
				path={`${ROOT_URL}/auth`}
				element={<Navigate replace to={`${ROOT_URL}/auth/login`} />}
			/>

			<Route path='/logout' element={<Logout />} />
			<Route path='*' element={<Navigate replace to={"/error/404"} />} />
			<Route path='/error/*' element={<ErrorsPage />}>
				<Route path='404' element={<Error404 />} />
				<Route path='500' element={<Error500 />} />
			</Route>
		</Route>
	),
	{
		basename: PUBLIC_URL,
	}
);

// {!isAuthorized ? (
// 	/* Redirect to `/auth/login` when user is not authorized */
// 	<Route
// 		path={`${ROOT_URL}/`}
// 		element={<Navigate replace to={`${ROOT_URL}/auth/login`} />}
// 	/>
// ) : (
// 	<Route
// 		path={`${ROOT_URL}/auth/`}
// 		element={<Navigate replace to={`${ROOT_URL}`} />}
// 	/>
// )}

export const AppRoute = () => {
	const isAuthorized = useSelector<RootState>(
		({ auth }) => auth.user,
		shallowEqual
	);

	return (
		<Suspense
			fallback={
				<div className='splash-screen'>
					<img
						src={toAbsoluteUrl("/media/logos/logo-landing.svg")}
						alt='Start logo'
					/>
					<span>Loading ...</span>
				</div>
			}>
			<RouterProvider router={router} />
		</Suspense>
	);
};
