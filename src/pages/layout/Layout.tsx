import { Box, Grid, Stack } from "@mui/material";
import ScrollContainer from "components/containers/ScrollContainer";
import { FC, PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack sx={{ height: "100vh", overflow: "hidden" }}>
			<Header />
			<Box flexGrow={1}>
				<Grid container sx={{ height: "100%" }} alignItems="stretch">
					<Grid item>
						<Sidebar />
					</Grid>
					<Grid item flexGrow={1}>
						<ScrollContainer>{children}</ScrollContainer>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Stack>
	);
};

export default Layout;
