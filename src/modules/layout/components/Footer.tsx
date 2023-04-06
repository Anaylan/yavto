/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useLayout } from "../core";

const Footer: FC = () => {
	const { classes } = useLayout();
	return (
		<div
			className='footer pt-10 pb-5 d-flex flex-column flex-md-row flex-stack container'
			id='kt_footer'>
			{/* begin::Container */}
			{/* begin::Copyright */}
			<div className='text-dark order-2 order-md-1'>
				<span className='text-muted fw-bold me-1'>
					{new Date().getFullYear()} &copy; ЯАВТО.РФ Все права защищены
				</span>
			</div>
			{/* end::Copyright */}
			{/* end::Container */}
		</div>
	);
};

export { Footer };
