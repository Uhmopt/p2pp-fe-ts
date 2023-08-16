enum APIResponseCode {
	SUCCESS = 1,
	FAILED = -1,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface APIResponseType<T = any> {
	Code: APIResponseCode;
	Data?: T;
	Message: string;
}

export type APITablePageResponseType<T> = {
	currentPage: number;
	hasNext: boolean;
	hasPrevious: boolean;
	total: number;
	totalPage: number;
} & T;

export { APIResponseCode };
