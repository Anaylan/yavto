import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../../../core/LayoutProvider";
import { usePageData } from "app/models/layouts/PageData";
import { Header } from "../Header";
import { MenuInner } from "../MenuInner";

const DefaultTitle: FC = () => {
	const { pageTitle, pageDescription, pageBreadcrumbs } = usePageData();
	const { config, classes } = useLayout();
	return (
		<div
			id='kt_header_nav'
			data-kt-swapper='true'
			data-kt-swapper-mode='prepend'
			data-kt-swapper-parent="{default: '#kt_body', 'lg': '#kt_header_nav'}"
			data-kt-drawer='true'
			data-kt-drawer-name='header-menu'
			data-kt-drawer-activate='{default: true, lg: false}'
			data-kt-drawer-overlay='true'
			data-kt-drawer-width="{default:'200px', '300px': '250px'}"
			data-kt-drawer-direction='end'
			data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
			className={clsx("page-title d-flex", classes.pageTitle.join(" ")) + ""}>
			{/* begin::Title */}
			{/* end::Title */}

			<div
				className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
				id='#kt_header_menu'
				data-kt-menu='true'>
				<MenuInner />
			</div>
			{/* <Header /> */}
		</div>
	);
};

export { DefaultTitle };
