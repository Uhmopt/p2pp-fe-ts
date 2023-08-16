import { LOCAL_STORAGE_KEYS } from "constants/localStorageKeys";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthLogin from "./AuthLogin";

const AuthLoginPage = () => {
	const { token = "" } = useParams() ?? "";

	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token);
			navigate("/");
		}
	}, [token]);

	return (
		<div>
			<AuthLogin />
		</div>
	);
};

export default AuthLoginPage;
