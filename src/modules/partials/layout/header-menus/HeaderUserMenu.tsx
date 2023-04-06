import { URL_IMG } from "app/config";
import { UserModel } from "app/models/user/UserModel";
import { FC } from "react";
import { Link } from "react-router-dom";

interface User {
	user: UserModel;
}

const HeaderUserMenu: FC<User> = ({ user }) => {
	console.log(user);
	return (
		<div
			className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
			data-kt-menu='true'>
			<div className='menu-item px-3'>
				<div className='menu-content d-flex align-items-center px-3'>
					<div className='symbol symbol-50px me-5'>
						<img
							alt={user.company_name}
							src={URL_IMG + "company/" + user.company_img}
						/>
					</div>

					<div className='d-flex flex-column'>
						<div className='fw-bolder d-flex align-items-center fs-5'>
							{user.company_name}
						</div>
					</div>
				</div>
			</div>

			<div className='separator my-2'></div>

			<div className='menu-item px-5 my-1'>
				<Link to={`/account/settings`} className='menu-link px-5'>
					Настройки
				</Link>
			</div>

			<div className='menu-item px-5'>
				<Link to='/logout' className='menu-link menu-logout px-5'>
					Выйти
				</Link>
			</div>
			<div className='menu-item px-3'>
				<div className='menu-content px-3'>
					<label className='form-check form-switch form-check-custom form-check-solid pulse pulse-success'>
						<input
							className='form-check-input w-30px h-20px'
							type='checkbox'
							value={"1"}
							defaultChecked={true}
							name='dark'
							id='kt_user_menu_dark_mode_toggle'
							data-kt-url='#'
						/>
						<span className='pulse-ring ms-n1'></span>
						<span className='form-check-label text-gray-600 fs-7'>
							Тёмная тема
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export { HeaderUserMenu };
