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
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					background: "white",
					"& fieldset": {
						borderColor: "transparent", // Set the border color to transparent
					},
					"&:hover fieldset": {
						borderColor: "transparent", // Set the border color to transparent on hover
					},
					"&.Mui-focused fieldset": {
						borderColor: "transparent", // Set the border color to transparent when focused
					},
				},
			},
		},
	},

	typography: { fontFamily: "Futura Bk BT", body1: { fontSize: "0.875rem" }, body2: { fontSize: "1rem" } },
});
