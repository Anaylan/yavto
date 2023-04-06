/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { DefaultTitle } from "../header/page-title/DefaultTitle";

const Toolbar: FC = () => {
	return (
		<div className='d-flex align-items-stretch' id='kt_toolbar'>
			{/* begin::Container */}
			<div
				id='kt_toolbar_container'
				className={"header-menu align-items-stretch"}
				data-kt-drawer='true'
				data-kt-drawer-name='header-menu'
				data-kt-drawer-activate='{default: true, lg: false}'
				data-kt-drawer-overlay='true'
				data-kt-drawer-width="{default:'200px', '300px': '250px'}"
				data-kt-drawer-direction='end'
				data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
				data-kt-swapper='true'
				data-kt-swapper-mode='prepend'
				data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
				<DefaultTitle />
			</div>
			{/* end::Container */}
		</div>
	);
};

export { Toolbar };
