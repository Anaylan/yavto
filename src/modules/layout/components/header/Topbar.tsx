import { URL_IMG } from "app/config";
import { UserModel } from "app/models/user/UserModel";
import { RootState } from "app/redux/RootReducer";
import clsx from "clsx";
import { KTSVG } from "modules/helpers";
import { HeaderUserMenu } from "modules/partials";
import { FC } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useLayout } from "../../core";

const toolbarButtonMarginClass = "ms-1 ms-lg-3",
	toolbarButtonHeightClass = "w-30px h-30px w-md-40px h-md-40px",
	toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px",
	toolbarButtonIconSizeClass = "svg-icon-1";

const Topbar: FC = () => {
	const { config } = useLayout();

	const user: UserModel = useSelector<RootState>(
		({ auth }) => auth.user,
		shallowEqual
	) as UserModel;

	return (
		<div className='d-flex align-items-stretch flex-shrink-0'>
			{/* Search */}
			{/* <div className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}>
        <Search />
      </div> */}

			{/* CHAT */}
			<div
				className={clsx("d-flex align-items-center", toolbarButtonMarginClass)}>
				{/* begin::Menu wrapper */}
				<div
					className={clsx(
						"btn btn-icon btn-active-light-primary position-relative",
						toolbarButtonHeightClass
					)}
					id='kt_drawer_chat_toggle'>
					<KTSVG
						path='/media/icons/duotune/communication/com012.svg'
						className={toolbarButtonIconSizeClass}
					/>

					<span className='bullet-value'>mess</span>
				</div>
				{/* end::Menu wrapper */}
			</div>

			{/* begin::User */}
			<div
				className={clsx("d-flex align-items-center", toolbarButtonMarginClass)}
				id='kt_header_user_menu_toggle'>
				{/* begin::Toggle */}
				<div
					className={
						clsx("cursor-pointer symbol", toolbarUserAvatarHeightClass) +
						"btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3"
					}
					data-kt-menu-trigger='click'
					data-kt-menu-attach='parent'
					data-kt-menu-placement='bottom-end'
					data-kt-menu-flip='bottom'>
					<div className='d-none d-md-flex flex-column align-items-end justify-content-center me-2'>
						<span className='text-dark fs-base fw-bolder lh-1'>
							{user.company_name}
						</span>
					</div>
					<div className='symbol symbol-30px symbol-md-30px'>
						<img
							src={URL_IMG + "company/" + user.company_img}
							alt={user.company_name}
						/>
						{/* <img src={toAbsoluteUrl(`${user.company_img}`)} alt='metronic' /> */}
					</div>
				</div>
				<HeaderUserMenu user={user} />
				{/* end::Toggle */}
			</div>
			{/* end::User */}

			{/* begin::Aside Toggler */}
			{config.header.left === "menu" && (
				<div
					className='d-flex align-items-center d-lg-none ms-2 me-n3'
					title='Show header menu'>
					<div
						className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
						id='kt_header_menu_mobile_toggle'>
						<KTSVG
							path='/media/icons/duotune/text/txt001.svg'
							className='svg-icon-1'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export { Topbar };
