import { API_URL } from "app/config";
import { AuthModel } from "app/models/AuthModel";
import { UserModel } from "app/models/user/UserModel";
import axios from "axios";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/token/true`;
export const LOGIN_URL = `${API_URL}/auth`;
export const REGISTER_URL = `${API_URL}/auth/new`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;

// Server should return AuthModel
export function login(email: string, password: string) {
	console.log(axios.post(LOGIN_URL, { email, password }));
	return axios.post(LOGIN_URL, { email, password });
}

// Server should return AuthModel
export function register(
	email: string,
	name: string,
	dir_name: string,
	dir_phone: string,
	inn: number,
	region: string,
	dist: string,
	city: string,
	address: string,
	img: string,
	ref_code: string,
	password: string
) {
	return axios.post<AuthModel>(REGISTER_URL, {
		email,
		name,
		dir_name,
		dir_phone,
		inn,
		region,
		dist,
		city,
		address,
		img,
		ref_code,
		password,
	});
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
	return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
	// Authorization head should be fulfilled in interceptor.
	// Check common redux folder => setupAxios
	return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}
