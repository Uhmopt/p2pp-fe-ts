import { Grid } from "@mui/material";
import { UIMenuData } from "types/ui-base-types";
import ClientHeaderMenuItem from "./ClientHeaderMenuItem";

const ClientHeaderMenu = () => {
	return (
		<Grid container spacing={1}>
			{(
				[
					{ label: "My Details" },
					{ label: "Dreams" },
					{ label: "Goals" },
					{ label: "Personal" },
					{ label: "Super" },
					{ label: "Reports" },
					{ label: "Shop" },
					{ label: "Apply" },
				] as Array<UIMenuData>
			).map((item, itemIndex) => {
				return (
					<Grid item key={itemIndex}>
						<ClientHeaderMenuItem data={item} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ClientHeaderMenu;
