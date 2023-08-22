import { ArrowForwardIos, BarChart, Delete, Edit } from "@mui/icons-material";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { COLOR_BLUE_LIGHT } from "constants/colors";
import { FC, PropsWithChildren, useMemo, useState } from "react";

const PortfolioTableApplicationDetail: FC<PropsWithChildren<{ data?: any; open?: boolean }>> = ({ data = {}, open: propsOpen = false }) => {
	const [isOpen, setIsOpen] = useState(false);

	const open = useMemo(() => isOpen && propsOpen, [isOpen, propsOpen]);

	const handleToggleOpen = () => {
		setIsOpen((s = false) => !s);
	};

	const handleEditSub = (value = {}, valueIndex = -1) => {
		// do sth
	};

	const handleDeleteSub = (value = {}, valueIndex = -1) => {
		// do sth
	};

	return (
		<>
			<tr>
				<td style={{ padding: 0 }}></td>
				<td align="right">
					<Collapse in={propsOpen}>
						<IconButton size="small" color="inherit" onClick={handleToggleOpen}>
							<ArrowForwardIos />
						</IconButton>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.name}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.code}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.quantity}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.ave_price}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.cost_base}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.current_price}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data?.value}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography>{data.profit_loss}</Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0 }}>
					<Collapse in={propsOpen}>
						<BarChart />
					</Collapse>
				</td>

				{/* right part */}
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
				<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
					<Collapse in={propsOpen}>
						<Box sx={{ p: 1 }}>
							<Typography></Typography>
						</Box>
					</Collapse>
				</td>
			</tr>
			{(data?.data ?? []).map((subItem: any, subItemIndex = -1) => {
				return (
					<tr key={subItemIndex}>
						<td style={{ padding: 0 }}></td>
						<td style={{ padding: 0 }}></td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography></Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography></Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography></Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.ave_price}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.cost_base}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.current_price}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.value}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.profit_loss}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0 }}>
							<Collapse in={open}>
								<BarChart />
							</Collapse>
						</td>

						{/* right part */}
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.transaction_type}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.quantity}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.cost}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.brokerage}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.trading_value}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ p: 1 }}>
									<Typography>{subItem?.status}</Typography>
								</Box>
							</Collapse>
						</td>
						<td style={{ padding: 0, background: COLOR_BLUE_LIGHT }}>
							<Collapse in={open}>
								<Box sx={{ display: "flex" }}>
									<IconButton onClick={() => handleEditSub(subItem, subItemIndex)} size="small" color="primary">
										<Edit />
									</IconButton>
									<IconButton onClick={() => handleDeleteSub(subItem, subItemIndex)} size="small" color="error">
										<Delete />
									</IconButton>
								</Box>
							</Collapse>
						</td>
					</tr>
				);
			})}
		</>
	);
};

export default PortfolioTableApplicationDetail;
