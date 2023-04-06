import { Action } from "@reduxjs/toolkit";
import { getUserByToken } from "api/AuthCRUD";
import { UserModel } from "app/models/user/UserModel";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";

export interface ActionWithPayload<T> extends Action {
	payload?: T;
}

export const actionTypes = {
	Login: "[Login] Action",
	Logout: "[Logout] Action",
	Register: "[Register] Action",
	UserRequested: "[Request User] Action",
	UserLoaded: "[Load User] Auth API",
	SetUser: "[Set User] Action",
};

const initialAuthState: IAuthState = {
	user: undefined,
	title: undefined,
};

export interface IAuthState {
	user?: UserModel;
	title?: string;
}

export const reducer = persistReducer(
	{ storage, key: "header", whitelist: ["user", "title"] },
	(
		state: IAuthState = initialAuthState,
		action: ActionWithPayload<IAuthState>
	) => {
		switch (action.type) {
			case actionTypes.Login: {
				const title = action.payload?.title;
				return { title };
			}

			case actionTypes.Register: {
				const title = action.payload?.title;
				return { title };
			}

			case actionTypes.UserRequested: {
				return { ...state, user: undefined };
			}

			case actionTypes.Logout: {
				return initialAuthState;
			}

			case actionTypes.UserLoaded: {
				const user = action.payload?.user;
				return { ...state, user };
			}

			case actionTypes.SetUser: {
				const user = action.payload?.user;
				return { ...state, user };
			}

			default:
				return state;
		}
	}
);

export const actions = {
	login: (title: string) => ({
		type: actionTypes.Login,
		payload: { title },
	}),
	register: (title: string) => ({
		type: actionTypes.Register,
		payload: { title },
	}),
	logout: () => ({ type: actionTypes.Logout }),
	requestUser: () => ({
		type: actionTypes.UserRequested,
	}),
	fulfillUser: (user: UserModel) => ({
		type: actionTypes.UserLoaded,
		payload: { user },
	}),
	setUser: (user: UserModel) => ({
		type: actionTypes.SetUser,
		payload: { user },
	}),
};

export function* saga() {
	yield takeLatest(actionTypes.Login, function* loginSaga() {
		yield put(actions.requestUser());
	});

	yield takeLatest(actionTypes.Register, function* registerSaga() {
		yield put(actions.requestUser());
	});

	yield takeLatest(actionTypes.UserRequested, function* userRequested() {
		const { data } = yield getUserByToken();
		yield put(actions.fulfillUser(data.data));
	});
}
