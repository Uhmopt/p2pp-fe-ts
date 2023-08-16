import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TokenProvider } from "context/TokenContext";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import withRoot from "./withRoot";

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<SnackbarProvider maxSnack={3} autoHideDuration={3000}>
				<TokenProvider>
					<BrowserRouter>
						<AppRoutes />
					</BrowserRouter>
				</TokenProvider>
			</SnackbarProvider>
		</LocalizationProvider>
	);
};

export default withRoot(App);
