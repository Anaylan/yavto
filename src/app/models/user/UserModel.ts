import { AuthModel } from "../AuthModel";

export interface UserModel {
	current_balance: string;
	firstname?: string;
	cid: number;
	username: string;
	password: string | undefined;
	email: string;
	name: string;
	lastname: string;
	fullname?: string;
	occupation?: string;
	company_name?: string;
	phone?: string;
	roles?: Array<number>;
	company_img?: string;
	auth?: AuthModel;
}
