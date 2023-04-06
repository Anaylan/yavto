/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { RentWidget, InfoWidget } from "modules/partials/widgets";

import { useSearchParams } from "react-router-dom";

const DashboardPage: FC = () => (
	<>
		{/* begin::Row */}
		<div className='row d-flex flex-nowrap gy-5 g-xl-8 pt-5'>
			<div className='d-flex flex-column col-9'>
				<RentWidget
					className='card card-bordered mb-5 mb-xl-8'
					chartColor='primary'
					chartHeight='350px'
				/>
			</div>
			<div className='sidebar-info col-3'>
				<InfoWidget className='' />
			</div>
		</div>
		{/* end::Row */}
	</>
);

const DashboardWrapper: FC = () => {
	return (
		<>
			<DashboardPage />
		</>
	);
};

export default DashboardWrapper;
