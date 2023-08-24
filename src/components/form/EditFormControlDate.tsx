import { FormHelperText, Grid, InputLabel, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import OutsideClickDetector from "components/outside-click-detector";
import dayjs from "dayjs";
import { FC, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { DispatchFunction, FieldRequiredType, StaticField } from "types/ui-base-types";
import { checkValidField } from "./editFormUtils";

const EditFormControlDate: FC<
	PropsWithChildren<{
		field?: Partial<StaticField>;
		readOnly?: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		value?: string | number | any;
		onChange?: DispatchFunction<string | number>;
		onClick?: (value?: Partial<StaticField>) => void;
		onBlur?: () => void;
		isLabel?: boolean;
		autoFocus?: boolean;
		isValid?: boolean;
		defaultDisplayValue?: string;
	}>
> = ({
	field = {} as StaticField,
	readOnly = false,
	value: propsValue = "",
	onChange = () => null,
	onClick = () => null,
	onBlur = () => null,
	isLabel = true,
	autoFocus = false,
	isValid: propsIsValid = true,
	defaultDisplayValue = "",
}) => {
	const ref = useRef<HTMLInputElement>(null);

	const errorMessage = useMemo(() => field.errorMessage ?? "This field is required", [field.errorMessage]);

	const value = useMemo(() => {
		if (field.getOptionValue) {
			return field.getOptionValue(propsValue);
		}
		return propsValue;
	}, [propsValue, field]);

	const renderValue = useMemo(() => value || "", [value]);
	const [isValid, setIsValid] = useState(true);

	const [isOpen, setIsOpen] = useState(false);

	const handleBlur = () => {
		onBlur();

		if (field.required === FieldRequiredType.Required) {
			setIsValid(checkValidField({ field, value: value ?? "" }));
		}
	};

	useEffect(() => {
		if (ref.current && autoFocus && !readOnly) {
			ref.current.focus();
		}
	}, [ref, autoFocus, readOnly]);

	useEffect(() => {
		setIsValid(propsIsValid);
	}, [propsIsValid]);

	return readOnly ? (
		<Grid container alignItems="center" className="w-full" sx={{ p: 2 }} onClick={() => onClick(field)}>
			{isLabel ? (
				<Grid item lg={3} md={4} sm={4} xs={4}>
					<InputLabel>{field.displayName}</InputLabel>
				</Grid>
			) : null}
			<Grid item lg={9} md={8} sm={8} xs={8}>
				<Typography sx={{ minHeight: "1rem" }} fontWeight={600}>
					{renderValue || defaultDisplayValue}
				</Typography>
			</Grid>
			{isValid ? null : <FormHelperText error>{isValid ? "" : errorMessage}</FormHelperText>}
		</Grid>
	) : (
		<div className="w-full" onClick={() => onClick(field)}>
			<OutsideClickDetector onClickOutside={isOpen ? undefined : handleBlur}>
				<Grid container alignItems="center" className="w-full" onClick={() => onClick(field)}>
					{isLabel ? (
						<Grid item lg={3} md={4} sm={4} xs={4}>
							<InputLabel>{field?.displayName ?? ""}</InputLabel>
						</Grid>
					) : null}
					<Grid item lg={9} md={8} sm={8} xs={8}>
						<DatePicker
							ref={ref}
							value={dayjs(value ?? "")}
							onChange={(newValue) => onChange(newValue?.format("YYYY-MM-DDTHH:mm:ss") ?? "", field.name)}
							format="DD/MM/YYYY"
							onOpen={() => setIsOpen(true)}
							onClose={() => setIsOpen(false)}
							// name={field?.name}
							// fullWidth
							// size="small"
							// // placeholder={
							// // 	field.placeholder === true ? `Enter ${(field.displayName ?? "").toLowerCase()}` : field.placeholder ? field.placeholder : ""
							// // }
							// onBlur={onBlur}
							slotProps={{ textField: { size: "small" } }}
						/>
						{isValid ? null : <FormHelperText error>{isValid ? "" : errorMessage}</FormHelperText>}
					</Grid>
				</Grid>
			</OutsideClickDetector>
		</div>
	);
};

export default EditFormControlDate;
