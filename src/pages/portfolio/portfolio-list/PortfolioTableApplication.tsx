import { ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC, PropsWithChildren, useState } from "react";
import { UIColorUnion } from "types/ui-base-types";
import PortfolioTableApplicationDetail from "./PortfolioTableApplicationDetail";

const PortfolioTableApplication: FC<PropsWithChildren<{ title?: string; color?: UIColorUnion }>> = ({
	title = "SMSF Universe",
	color = UIColorUnion.primary,
}) => {
	const theme = useTheme();

	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen((s = false) => !s);
	};

	return (
		<>
			<tr
				style={{
					background: theme.palette[color].main,
					color: theme.palette[color].contrastText,
					padding: 8,
				}}
			>
				<td width="2%">
					<IconButton size="small" color="inherit" onClick={handleToggleOpen}>
						<ArrowForwardIos />
					</IconButton>
				</td>
				<td width="8%">
					<Typography variant="body2">{title}</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Name
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Code
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Quantity
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Ave Price
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Cost base
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Current price
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Value
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Profit/loss
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Chart
					</Typography>
				</td>

				{/* right part */}
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Transaction Type
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Quantity
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Trading Cost
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Brokerage
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Value
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Status
					</Typography>
				</td>
				<td style={{ padding: 0 }}>
					<Typography variant="body2" sx={{ opacity: 0.5 }}>
						Actions
					</Typography>
				</td>
			</tr>
			<tr
				style={{
					background: theme.palette[color].main,
					color: theme.palette[color].contrastText,
					padding: 8,
					borderBottom: `solid 1px white`,
				}}
			>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td align="center" colSpan={2}>
					<Typography variant="body2">Jane Smith</Typography>
				</td>
				<td colSpan={2} align="center">
					<Typography variant="body2">$960,000</Typography>
				</td>
				<td colSpan={2} align="center">
					<Typography variant="body2">$100,000</Typography>
				</td>
				<td colSpan={2} align="center">
					<Typography variant="body2">$82,000</Typography>
				</td>

				{/* right part */}
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
				<td style={{ padding: 0 }}></td>
			</tr>
			{[
				{
					name: "ANZ",
					code: "ANZ",
					quantity: 1000,
					ave_price: 20.5,
					cost_base: 1003000,
					current_price: 25.45,
					value: 1084380,
					profit_loss: 81380,
					data: [
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
					],
				},
				{
					name: "ANZ",
					code: "ANZ",
					quantity: 1000,
					ave_price: 20.5,
					cost_base: 1003000,
					current_price: 25.45,
					value: 1084380,
					profit_loss: 81380,
					data: [
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
					],
				},
				{
					name: "ANZ",
					code: "ANZ",
					quantity: 1000,
					ave_price: 20.5,
					cost_base: 1003000,
					current_price: 25.45,
					value: 1084380,
					profit_loss: 81380,
					data: [
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
					],
				},
				{
					name: "ANZ",
					code: "ANZ",
					quantity: 1000,
					ave_price: 20.5,
					cost_base: 1003000,
					current_price: 25.45,
					value: 1084380,
					profit_loss: 81380,
					data: [
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
						{
							ave_price: 20.5,
							cost_base: 1003000,
							current_price: 25.45,
							value: 1084380,
							profit_loss: 81380,
							transaction_type: "BUY",
							quantity: 1000,
							cost: 25.4,
							brokerage: 50,
							trading_value: -25350,
							status: "Execute",
						},
					],
				},
			].map((item, itemIndex) => {
				return <PortfolioTableApplicationDetail key={itemIndex} data={item} open={isOpen} />;
			})}
		</>
	);
};

export default PortfolioTableApplication;
