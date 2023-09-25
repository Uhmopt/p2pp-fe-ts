import { Alert } from "@mui/material";
import { APIResponseCode } from "api/apiResponse";
import userService from "api/user/user.service";
import { User } from "api/user/user.types";
import { useSnackbar } from "notistack";
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { DispatchFunction } from "types/ui-base-types";
import { useToken } from "./TokenContext";
import { DEFAULT_USER } from "./defaultUser";

type UserContextType = {
	user: User;
	setUser: DispatchFunction<User>;
	userFormData: User;
	setUserFormData: DispatchFunction<User>;
	resetForm: () => void;
	notChangedForm: boolean;
	isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};

export const UserProvider: React.FC<PropsWithChildren<{ relations?: Array<string> }>> = ({ children, relations = [] }) => {
	const { enqueueSnackbar } = useSnackbar();

	const { token } = useToken();
	const userId = useMemo(() => token?.sub ?? 0, [token]);

	const [user, setUser] = useState<User>(DEFAULT_USER as User);
	const [userFormData, setUserFormData] = useState<User>(DEFAULT_USER as User);
	const [isLoading, setIsLoading] = useState(false);

	const notChangedForm = useMemo<boolean>(
		() => JSON.stringify(user) === JSON.stringify(userFormData),
		[JSON.stringify(user), JSON.stringify(userFormData)],
	);

	const loadData = async () => {
		setIsLoading(true);
		const res = await userService.get({ id: userId, relations });

		if (res.code === APIResponseCode.SUCCESS) {
			setUser((res.data ?? DEFAULT_USER) as User);
			setUserFormData((res?.data ?? DEFAULT_USER) as User);
		} else {
			enqueueSnackbar(res.message, { variant: "warning" });
		}

		setIsLoading(false);
	};

	const resetForm = () => {
		setUserFormData(user);
	};

	useEffect(() => {
		if (userId > 0) {
			loadData();
		}
	}, [userId]);

	return (
		<UserContext.Provider value={{ user, setUser, userFormData, setUserFormData, notChangedForm, isLoading, resetForm }}>
			{isLoading ? <Alert color="info">Loading ...</Alert> : children}
		</UserContext.Provider>
	);
};
