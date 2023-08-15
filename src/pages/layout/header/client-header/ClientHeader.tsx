import { Box, Grid } from "@mui/material";
import Logo from "components/logo";
import ClientHeaderMenu from "./menu";

const ClientHeader = () => {
	return (
		<Box sx={{ p: "12px", background: (theme) => theme.palette.common.white }}>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Logo />
				</Grid>
				<Grid item>
					<ClientHeaderMenu />
				</Grid>
			</Grid>
		</Box>
	);
};

export default ClientHeader;
