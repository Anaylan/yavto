/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserModel } from "app/models/user/UserModel";
import { RootState } from "app/redux/RootReducer";
import { KTSVG } from "modules/helpers";
import {
	ChartsWidget1,
	ListsWidget5,
	TablesWidget1,
	TablesWidget5,
} from "modules/partials/widgets";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Overview: React.FC = () => {
	const user: UserModel = useSelector<RootState>(
		({ auth }) => auth.user,
		shallowEqual
	) as UserModel;

	// const user: UserModel = {
	// 	pic: "/media/avatars/150-1.jpg",
	// 	name: "ветер",
	// 	email: "email",
	// 	id: 0,
	// 	username: "",
	// 	password: undefined,
	// 	lastname: "",
	// };
	return (
		<>
			<div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
				<div className='card-header cursor-pointer'>
					<div className='card-title m-0'>
						<h3 className='fw-bolder m-0'>Данные профиля</h3>
					</div>

					<Link
						to='/app/account/settings'
						className='btn btn-primary align-self-center'>
						Редактировать профиль
					</Link>
				</div>

				<div className='card-body p-9'>
					{user.name ? (
						<div className='row mb-7'>
							<label className='col-lg-4 fw-bold text-muted'>Полное имя</label>

							<div className='col-lg-8'>
								<span className='fw-bolder fs-6 text-dark'>{user.name}</span>
							</div>
						</div>
					) : (
						<></>
					)}

					{user.company_name ? (
						<div className='row mb-7'>
							<label className='col-lg-4 fw-bold text-muted'>Компания</label>

							<div className='col-lg-8 fv-row'>
								<span className='fw-bold fs-6'>{user.company_name}</span>
							</div>
						</div>
					) : (
						<></>
					)}

					{user.phone ? (
						<div className='row mb-7'>
							<label className='col-lg-4 fw-bold text-muted'>
								Номер телефона
								<i
									className='fas fa-exclamation-circle ms-1 fs-7'
									data-bs-toggle='tooltip'
									title='Phone number must be active'></i>
							</label>

							<div className='col-lg-8 d-flex align-items-center'>
								<span className='fw-bolder fs-6 me-2'>{user.phone}</span>

								<span className='badge badge-success'>Verified</span>
							</div>
						</div>
					) : (
						<></>
					)}

					<div className='row mb-7'>
						<label className='col-lg-4 fw-bold text-muted'>Company Site</label>

						<div className='col-lg-8'>
							<a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
								keenthemes.com
							</a>
						</div>
					</div>

					<div className='row mb-7'>
						<label className='col-lg-4 fw-bold text-muted'>
							Country
							<i
								className='fas fa-exclamation-circle ms-1 fs-7'
								data-bs-toggle='tooltip'
								title='Country of origination'></i>
						</label>

						<div className='col-lg-8'>
							<span className='fw-bolder fs-6 text-dark'>Germany</span>
						</div>
					</div>

					<div className='row mb-7'>
						<label className='col-lg-4 fw-bold text-muted'>Communication</label>

						<div className='col-lg-8'>
							<span className='fw-bolder fs-6 text-dark'>Email, Phone</span>
						</div>
					</div>

					<div className='row mb-10'>
						<label className='col-lg-4 fw-bold text-muted'>Allow Changes</label>

						<div className='col-lg-8'>
							<span className='fw-bold fs-6'>Yes</span>
						</div>
					</div>

					<div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
						<KTSVG
							path='icons/duotune/general/gen044.svg'
							className='svg-icon-2tx svg-icon-warning me-4'
						/>
						<div className='d-flex flex-stack flex-grow-1'>
							<div className='fw-bold'>
								<h4 className='text-gray-800 fw-bolder'>
									We need your attention!
								</h4>
								<div className='fs-6 text-gray-600'>
									Your payment was declined. To start using tools, please
									<Link className='fw-bolder' to='/app/account/settings'>
										Add Payment Method
									</Link>
									.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row gy-10 gx-xl-10'>
				<div className='col-xl-6'>
					<ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
				</div>

				<div className='col-xl-6'>
					<TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
				</div>
			</div>

			<div className='row gy-10 gx-xl-10'>
				<div className='col-xl-6'>
					<ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
				</div>

				<div className='col-xl-6'>
					<TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
				</div>
			</div>
		</>
	);
};
export default Overview;
