/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { APIResponseCode, APIResponseType } from "./apiResponse";

export class APIService<T = any> {
	async gets(p?: any): Promise<APIResponseType<T[]>> {
		return new Promise((resolve, reject) => {
			resolve({ Code: APIResponseCode.FAILED, Message: "Not Defined (development)" });
		});
	}

	async get({ id = "" }: { id?: string }): Promise<APIResponseType<T>> {
		return new Promise((resolve, reject) => {
			resolve({ Code: APIResponseCode.FAILED, Message: "Not Defined (development)" });
		});
	}

	async save({ data }: { data?: T }): Promise<APIResponseType<string | boolean>> {
		return new Promise((resolve, reject) => {
			resolve({ Code: APIResponseCode.FAILED, Message: "Not Defined (development)" });
		});
	}

	async saves({ data = [] }: { data?: Array<T> }): Promise<APIResponseType<Array<string | boolean>>> {
		return new Promise((resolve, reject) => {
			resolve({ Code: APIResponseCode.FAILED, Message: "Not Defined (development)" });
		});
	}
	async deletes({ ids = [] }: { ids?: Array<string> }): Promise<APIResponseType<null>> {
		return new Promise((resolve, reject) => {
			resolve({ Code: APIResponseCode.FAILED, Message: "Not Defined (development)" });
		});
	}
}

export default new APIService();
