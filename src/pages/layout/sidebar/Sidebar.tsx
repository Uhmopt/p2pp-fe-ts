import { Box, Typography } from "@mui/material";
import ScrollContainer from "components/containers/ScrollContainer";
import SidebarMenu from "./SidebarMenu";
import { useNavigate } from "react-router-dom";
import { UIMenuData } from "types/ui-base-types";

const Sidebar = () => {
	const navigate = useNavigate();

	const handleClick = (value: UIMenuData) => {
		if (value.absPath) {
			navigate(value.absPath);
		}
	};

	return (
		<Box
			sx={{ background: (theme) => theme.palette.primary.main, width: 160, height: "100%", color: (theme) => theme.palette.common.white }}
		>
			<Typography variant="body2" fontWeight={700} sx={{ px: 3, py: 1 }}>
				My Details
			</Typography>
			<ScrollContainer>
				<SidebarMenu
					data={[
						{ label: "Overview", name: "Overview", absPath: "/" },
						{
							label: "Key Details",
							name: "Key Details",
							absPath: "",
							data: [
								{ label: "Basic Information", name: "Basic Information", absPath: "/basic-information" },
								{ label: "Contact Details", name: "Contact Details", absPath: "/contact-details" },
								{ label: "Identification", name: "Identification", absPath: "" },
								{ label: "Client Group", name: "Client Group", absPath: "" },
								{ label: "Client Entity", name: "Client Entity", absPath: "" },
								{ label: "Financial & Insurance Position", name: "Financial & Insurance Position", absPath: "" },
								{
									label: "Status - Marital, Resident, Tax & Birth Place",
									name: "Status - Marital, Resident, Tax & Birth Place",
									absPath: "",
								},
								{ label: "Children & Dependents", name: "Children & Dependents", absPath: "" },
								{ label: "Health Details", name: "Health Details", absPath: "" },
								{ label: "Employment", name: "Employment", absPath: "" },
								{ label: "Cashflow", name: "Cashflow", absPath: "" },
								{ label: "Lifestyle Goals & Planned Future Expenses", name: "Lifestyle Goals & Planned Future Expenses", absPath: "" },
								{ label: "Goals", name: "Goals", absPath: "" },
								{ label: "Risk Profile", name: "Risk Profile", absPath: "" },
								{ label: "Superannuation Contributions", name: "Superannuation Contributions", absPath: "" },
								{ label: "Retirement Planning", name: "Retirement Planning", absPath: "" },
								{ label: "Insurance Needs Analysis", name: "Insurance Needs Analysis", absPath: "" },
								{ label: "Estate Planning", name: "Estate Planning", absPath: "" },
								{ label: "Centerlink", name: "Centerlink", absPath: "" },
								{ label: "Stock Broking Details", name: "Stock Broking Details", absPath: "" },
								{ label: "Professional Advisers", name: "Professional Advisers", absPath: "" },
								{ label: "Service Package", name: "Service Package", absPath: "" },
								{ label: "Reviews", name: "Reviews", absPath: "" },
								{ label: "Lead/Referral Source", name: "Lead/Referral Source", absPath: "" },
							],
						},
						{
							label: "Administration",
							name: "Administration",
							absPath: "",
							data: [
								{ name: "Revenue Mapping", label: "Revenue Mapping", absPath: "" },
								{ name: "Phone Log", label: "Phone Log", absPath: "" },
								{ name: "Email", label: "Email", absPath: "" },
								{ name: "SMS Log", label: "SMS Log", absPath: "" },
								{ name: "Client Notes", label: "Client Notes", absPath: "" },
								{ name: "Tasks", label: "Tasks", absPath: "" },
								{ name: "Documents", label: "Documents", absPath: "" },
							],
						},
					]}
					onClick={handleClick}
				/>
			</ScrollContainer>
		</Box>
	);
};

export default Sidebar;
