import { LOCAL_STORAGE_KEYS } from "constants/localStorageKeys";
import jwt_decode from "jwt-decode";
import React, { createContext, PropsWithChildren, useContext } from "react";
import { UIJwtToken } from "types/ui-base-types";

type TokenContextType = {
	token: UIJwtToken;
};

export const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useToken = () => {
	const context = useContext(TokenContext);
	if (!context) {
		throw new Error("useToken must be used within a TokenProvider");
	}
	return context;
};

type TokenProviderProps = PropsWithChildren;

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
	const decoded = jwt_decode<UIJwtToken>(localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) ?? "");

	return <TokenContext.Provider value={{ token: decoded }}>{children}</TokenContext.Provider>;
};
