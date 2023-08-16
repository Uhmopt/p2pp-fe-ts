import { Divider, Grid, Typography } from "@mui/material";

const ClientOverview = () => {
	return (
		<div>
			<Typography variant="body2" fontWeight={700}>
				Matthew McBride C11272
			</Typography>

			<Divider sx={{ p: 1 }} />

			<Grid container spacing={2} sx={{ pt: 1 }}>
				{[
					{ label: "Email", value: "mhmmcbride@hotmail.com" },
					{ label: "Service Package", value: "Just Starting Out" },
					{ label: "Phone", value: "+61 411 722 854" },
					{ label: "Does the client require an FDS/Consent?", value: "Yes" },
					{ label: "Address", value: "84 Kuroki St, Penshurst NSW 2222, Australia" },
					{ label: "Review Frequency", value: "Half Yearly" },
					{ label: "DOB", value: "04/03/1982 41 y.o" },
					{ label: "Next Review Date", value: "26/04/2023" },
					{ label: "Occupation", value: "Abattoir Inspector" },
				].map((item, itemIndex) => {
					return (
						<Grid key={itemIndex} item lg={6} md={6} sm={6} xs={12}>
							<Typography>{item.label ?? ""}</Typography>
							<Typography variant="body2" fontWeight={700}>
								{item.value ?? ""}
							</Typography>
						</Grid>
					);
				})}
			</Grid>

			<Divider sx={{ p: 1 }} />
		</div>
	);
};

export default ClientOverview;
