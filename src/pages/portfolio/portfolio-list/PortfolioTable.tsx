import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import PortfolioTableApplication from "./PortfolioTableApplication";

const PortfolioTable: FC<PropsWithChildren> = () => {
	return (
		<Box>
			<table border={0} style={{ width: "100%", borderCollapse: "collapse" }}>
				<tbody>
					<PortfolioTableApplication />
					<PortfolioTableApplication />
					<PortfolioTableApplication />
				</tbody>
			</table>
		</Box>
	);
};

export default PortfolioTable;
