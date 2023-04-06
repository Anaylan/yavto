import { RootState } from "app/";
import { UserModel } from "app/models/user/UserModel";
import { shallowEqual, useSelector } from "react-redux";
import { MenuInnerWithSub } from "./MenuInnerWithSub";
import { MenuItem } from "./MenuItem";

export function MenuInner() {
	const user: UserModel = useSelector<RootState>(
		({ auth }) => auth.user,
		shallowEqual
	) as UserModel;

	return (
		<>
			<MenuItem title='Главная' to={`/`} />
			<MenuInnerWithSub
				title='Автопарк'
				to={`/cars`}
				menuPlacement='bottom-start'
				menuTrigger='click'>
				{/* PAGES */}
				<MenuItem title='Автопарк' to={`/cars`}></MenuItem>
				<MenuItem title='Добавить автомобиль' to={`//cars/add`}></MenuItem>
			</MenuInnerWithSub>
			<MenuItem title='Финансы' to={`/finances`} />
			<MenuItem title='Отзывы' to={`/reviews`} />
			<MenuItem title='Чат' to={`/chat/private-chat`} />
			<MenuItem
				title={
					<span className='menu-title'>
						Баланс:&nbsp;
						<span className='menu-balance'>{user.current_balance || 0}</span>
						&nbsp;₽
					</span>
				}
				to={`//account/overview`}
			/>
		</>
	);
}
