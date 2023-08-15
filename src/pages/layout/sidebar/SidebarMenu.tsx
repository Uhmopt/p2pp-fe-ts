import { Box, Grid } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { UIMenuData } from "types/ui-base-types";

const SidebarMenu: FC<PropsWithChildren<{ data?: Array<UIMenuData> }>> = ({ data = [] as Array<UIMenuData> }) => {
	return (
		<Box>
			{data?.map((item, itemIndex) => {
				return (
					<Box key={itemIndex}>
						<Grid container spacing={1}>
							<Grid item></Grid>
						</Grid>
					</Box>
				);
			})}
		</Box>
	);
};

export default SidebarMenu;
