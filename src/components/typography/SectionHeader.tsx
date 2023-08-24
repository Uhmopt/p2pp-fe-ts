import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const SectionHeader: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Typography fontSize={20} fontWeight={700}>
			{children}
		</Typography>
	);
};

export default SectionHeader;
