import { Box, Typography } from "@mui/material";
import ScrollContainer from "components/containers/ScrollContainer";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
	return (
		<Box
			sx={{ background: (theme) => theme.palette.primary.main, width: 144, height: "100%", color: (theme) => theme.palette.common.white }}
		>
			<Typography fontSize={12} fontWeight={700} sx={{ px: 3, py: 1 }}>
				My Details
			</Typography>
			<ScrollContainer>
				<SidebarMenu data={[]} />
			</ScrollContainer>
		</Box>
	);
};

export default Sidebar;
