import { Grid } from "@mui/material";
import logoIcon from "assets/svgs/logo-icon.svg";
import logoText from "assets/svgs/logo-text.svg";
import { APP_NAME } from "constants/global";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/">
			<Grid container alignItems="center" sx={{ cursor: "pointer" }}>
				<Grid item>
					<img src={logoIcon} alt={APP_NAME} />
				</Grid>
				<Grid item>
					<img src={logoText} alt={APP_NAME} />
				</Grid>
			</Grid>
		</Link>
	);
};

export default Logo;
