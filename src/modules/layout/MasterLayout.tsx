import React from "react";
import { Outlet } from "react-router-dom";
import {
	ActivityDrawer,
	DrawerMessenger,
	InviteUsers,
	Main,
	Sidebar,
} from "../partials";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { ScrollTop } from "./components/ScrollTop";
import { PageDataProvider } from "./core";
import { MasterInit } from "./MasterInit";

const MasterLayout: React.FC = () => {
	return (
		<PageDataProvider>
			<div className='page d-flex flex-column flex-column-fluid'>
				<div
					className='wrapper d-flex flex-column flex-row-fluid'
					id='kt_wrapper'>
					<HeaderWrapper />

					<div
						id='kt_content'
						className='content d-flex flex-column flex-column-fluid mt-10'>
						<div className='post d-flex flex-column-fluid' id='kt_post'>
							<Content>
								<Outlet />
							</Content>
						</div>
					</div>
					<div id='kt_drawer_sidebar_toggle'>Нажми на меня</div>
					<Footer />
				</div>
			</div>
			{/* begin:: Drawers */}
			<ActivityDrawer />
			<DrawerMessenger />
			<Sidebar />
			{/* end:: Drawers */}
			{/* begin:: Modals */}
			<Main />
			<InviteUsers />
			{/* <UpgradePlan /> */}
			{/* end:: Modals */}
			<MasterInit />
			<ScrollTop />
		</PageDataProvider>
	);
};

export { MasterLayout };
