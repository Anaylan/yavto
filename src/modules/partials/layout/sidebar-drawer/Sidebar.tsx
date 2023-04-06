/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";

const Sidebar: FC = () => (
	<div
		id='kt_drawer_sidebar'
		className='bg-white'
		data-kt-drawer='true'
		data-kt-drawer-name='chat'
		data-kt-drawer-activate='true'
		data-kt-drawer-overlay='true'
		data-kt-drawer-width="{default:'300px', 'md': '500px'}"
		data-kt-drawer-direction='end'
		data-kt-drawer-toggle='#kt_drawer_sidebar_toggle'
		data-kt-drawer-close='#kt_drawer_sidebar_close'>
		<div className='card w-100 rounded-0' id='kt_drawer_chat_messenger'>
			<div
				className='card-header pe-5'
				id='kt_drawer_chat_messenger_header'></div>
		</div>
	</div>
);

export { Sidebar };
