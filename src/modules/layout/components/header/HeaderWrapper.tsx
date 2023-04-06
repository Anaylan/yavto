/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuComponent } from "assets/ts/components";
import { KTSVG, toAbsoluteUrl } from "modules/helpers";
import { useLayout } from "modules/layout/core";
import { Topbar } from "./Topbar";
import { Toolbar } from "../toolbar/Toolbar";
import { ROOT_URL } from "router/AppRoute";

export function HeaderWrapper() {
	const { pathname } = useLocation();
	const { config, classes, attributes } = useLayout();
	const { header, aside } = config;

	useEffect(() => {
		MenuComponent.reinitialization();
	}, [pathname]);

	return (
		<div
			id='kt_header'
			className={clsx("header align-items-stretch d-flex flex-column")}
			{...attributes.headerMenu}>
			<div
				className={clsx(
					"container-fluid d-flex align-items-stretch justify-content-between mt-5 mb-5"
				)}>
				{/* begin::Aside mobile toggle */}
				{aside.display && (
					<div
						className='d-flex align-items-center d-lg-none ms-n3 me-1'
						title='Show aside menu'>
						<div
							className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
							id='kt_aside_mobile_toggle'>
							<KTSVG
								path='/media/icons/duotune/abstract/abs015.svg'
								className='svg-icon-2x mt-1'
							/>
						</div>
					</div>
				)}

				{/* end::Aside mobile toggle */}
				{/* begin::Logo */}
				{!aside.display && (
					<div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
						<Link to='/dashboard' className='d-lg-none'>
							<img
								alt='Logo'
								src={toAbsoluteUrl("/media/logos/logo-2.svg")}
								className='h-30px'
							/>
						</Link>
					</div>
				)}
				{/* end::Logo */}
				{aside.display && (
					<div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
						<Link to='/' className='d-lg-none'>
							<img
								alt='Logo'
								src={toAbsoluteUrl("/media/logos/logo-1.svg")}
								className='h-30px'
							/>
						</Link>
					</div>
				)}
				{/* begin::Wrapper */}
				<div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
					{/* begin::Navbar */}
					<div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px'>
						<Link className='logo' to={`${ROOT_URL}`}>
							<span>Я</span>АВТОРФ
						</Link>
					</div>
					<div className='d-flex align-items-stretch flex-shrink-0'>
						<Topbar />
					</div>
				</div>

				{/* end::Wrapper */}
			</div>
			<div className='container-fluid d-flex align-items-stretch justify-content-between'>
				<Toolbar />
			</div>
		</div>
	);
}
