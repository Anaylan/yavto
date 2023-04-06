/* eslint-disable jsx-a11y/anchor-is-valid */
import ApexCharts, { ApexOptions } from "apexcharts";
import { getCSSVariableValue } from "assets/ts/_utils";
import React, { useEffect, useRef } from "react";

type Props = {
	className: string;
	chartColor: string;
	chartHeight: string;
};

const RentWidget: React.FC<Props> = ({
	className,
	chartColor,
	chartHeight,
}) => {
	const chartRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (!chartRef.current) {
				return;
			}

			const chart = new ApexCharts(
				chartRef.current,
				chartOptions(chartColor, chartHeight)
			);
			if (chart) {
				chart.render();
			}

			return () => {
				if (chart) {
					chart.destroy();
				}
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chartRef]);

	return (
		<>
			<h1 className='d-flex align-items-center my-1'>
				<span className='text-dark fw-black fs-1 mb-5'>
					Арендовано автомобилей в рублях
				</span>
			</h1>
			<div className={`card ${className}`}>
				{/* begin::Body */}

				<div className='card-body'>
					{/* begin::Stats */}
					<div className='card-p pb-0'>
						<div className='d-flex flex-stack flex-wrap'>
							<div className='me-2'>
								<div className='text-muted fs-7 fw-bold'>
									Статистика за последние 7 дней
								</div>
							</div>
						</div>
					</div>
					{/* end::Stats */}

					{/* begin::Chart */}
					<div
						ref={chartRef}
						className='mixed-widget-7-chart card-rounded-bottom'></div>
					{/* end::Chart */}
				</div>
				{/* end::Body */}
			</div>
		</>
	);
};

// begin temp solution
function getDate() {
	let now = new Date();

	let arr2 = [];

	for (let i = 0; i < 7; i++, now.setDate(now.getDate() - 1)) {
		let month;
		switch (now.getMonth() + 1) {
			case 1:
				month = "Янв";
				break;
			case 2:
				month = "Фев";
				break;
			case 3:
				month = "Мар";
				break;
			case 4:
				month = "Апр";
				break;
			case 5:
				month = "Май";
				break;
			case 6:
				month = "Июня";
				break;
			case 7:
				month = "Июля";
				break;
			case 8:
				month = "Авг";
				break;
			case 9:
				month = "Сен";
				break;
			case 10:
				month = "Окт";
				break;
			case 11:
				month = "Ноя";
				break;
			case 12:
				month = "Дек";
				break;

			default:
				break;
		}
		arr2.push(now.getDate() + " " + month);
	}
	return arr2;
}
const dataRent = {
	money: [30, 40, 150, 90, 90, 70, 70],
	days: getDate().slice().reverse(),
};
// end

const chartOptions = (chartColor: string, chartHeight: string): ApexOptions => {
	const labelColor = getCSSVariableValue("--bs-gray-800");
	const baseColor = getCSSVariableValue("--bs-" + chartColor);
	const lightColor = getCSSVariableValue("--bs-light-" + chartColor);
	const borderColor = getCSSVariableValue("--bs-gray-200");

	return {
		series: [
			{
				name: "Всего арендовано",
				data: dataRent.money,
			},
		],
		chart: {
			fontFamily: "inherit",
			type: "area",
			height: chartHeight,
			toolbar: {
				show: false,
			},
		},
		// dropShadow: {
		// 	enabled: true,
		// 	top: 0,
		// 	left: 0,
		// 	blur: 3,
		// 	opacity: 0.5,
		// },
		plotOptions: {},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: "solid",
			opacity: 1,
		},
		stroke: {
			curve: "smooth",
			show: true,
			width: 3,
			colors: [baseColor],
		},
		xaxis: {
			categories: dataRent.days,
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: labelColor,
					fontSize: "12px",
				},
			},
			crosshairs: {
				position: "front",
				stroke: {
					color: baseColor,
					width: 1,
					dashArray: 3,
				},
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: "12px",
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: labelColor,
					fontSize: "12px",
				},
			},
			title: {
				text: "Кол-во",
				style: {
					color: labelColor,
					fontSize: "12px",
					fontWeight: "400",
				},
			},
		},
		states: {
			normal: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			hover: {
				filter: {
					type: "none",
					value: 0,
				},
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: "none",
					value: 0,
				},
			},
		},
		tooltip: {
			style: {
				fontSize: "12px",
			},
			y: {
				formatter: function (val) {
					return "$" + val + " thousands";
				},
			},
		},
		colors: [lightColor],
		grid: {
			borderColor: borderColor,
			strokeDashArray: 4,
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		markers: {
			strokeColors: [baseColor],
			strokeWidth: 3,
		},
	};
};

export { RentWidget };
