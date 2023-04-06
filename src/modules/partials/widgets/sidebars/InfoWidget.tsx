/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
	className: string;
};

const InfoWidget: React.FC<Props> = ({ className }) => {
	return (
		<>
			<h1 className='d-flex align-items-center my-1'>
				<span className='text-dark fw-black fs-1 mb-5'>Сведения</span>
			</h1>

			<div className={`sidebar-info ${className}`}>
				{/* begin::Links */}
				<Link
					to='#'
					className='btn btn-sidebar btn-bg-light btn-active-light-primary d-block mb-3 d-flex align-center justify-content-between'>
					Рейтинг автопарка<span className='btn-bullet'>5</span>
				</Link>
				<Link
					to='#'
					className='btn btn-sidebar btn-bg-light btn-active-light-primary d-block mb-3 d-flex align-center justify-content-between'>
					Отзывы<span className='btn-bullet'>5</span>
				</Link>
				<Link
					to='#'
					className='btn btn-sidebar btn-bg-light btn-active-light-primary d-block mb-3 d-flex align-center justify-content-between'>
					Сообщения<span className='btn-bullet'>5</span>
				</Link>
				{/* end::Links */}
			</div>
		</>
	);
};

export { InfoWidget };
