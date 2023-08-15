import { createTheme } from "@mui/material/styles";

export const clientTheme = createTheme({
	palette: {
		primary: {
			main: "#008DC7",
		},
		secondary: {
			main: "#0079AB",
		},
		background: {
			default: "#EFEFF0",
		},
		text: { primary: "#6D6E71" },
	},

	components: {
		MuiBackdrop: { styleOverrides: { root: { backdropFilter: "blur(5px)" } } },
	},

	typography: { fontFamily: "Futura Bk BT", fontSize: 10 },
});
