import { FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, FC, FocusEventHandler, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { DispatchFunction, FieldRequiredType, StaticField, StaticFieldDataType } from "types/ui-base-types";
import { checkValidField } from "./editFormUtils";

const DEFAULT_MULTI__LINE_ROWS = 4;

const EditFormControlText: FC<
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

	const renderValue = useMemo(() => (typeof value === "string" && !value ? defaultDisplayValue : value), [value, defaultDisplayValue]);

	const isNumber = useMemo(
		() => field.dataType === StaticFieldDataType.Integer || field.dataType === StaticFieldDataType.Decimal,
		[field.dataType],
	);

	const [isValid, setIsValid] = useState(true);

	const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
		const { value: newValue = "" } = e?.target ?? {};
		onChange(isNumber ? Number(newValue) : newValue);
	};

	const handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
		onBlur();
		if (field.required === FieldRequiredType.Required) {
			setIsValid(checkValidField({ field, value: e?.target?.value ?? "" }));
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
					<Typography>{field.displayName}</Typography>
				</Grid>
			) : null}
			<Grid item lg={9} md={8} sm={8} xs={8}>
				<Typography variant="body2" fontWeight={700}>
					{renderValue}
				</Typography>
			</Grid>
			{isValid ? null : <FormHelperText error>{isValid ? "" : errorMessage}</FormHelperText>}
		</Grid>
	) : (
		<Grid container alignItems="center" className="w-full" onClick={() => onClick(field)}>
			{isLabel ? (
				<Grid item lg={3} md={4} sm={4} xs={4}>
					<Typography>{field?.displayName ?? ""}</Typography>
				</Grid>
			) : null}

			<Grid item lg={9} md={8} sm={8} xs={8}>
				<TextField
					inputRef={ref}
					label={isLabel ? undefined : field?.displayName}
					name={field?.name}
					value={value ?? ""}
					onChange={handleChange}
					fullWidth
					size="small"
					multiline={field.dataType === StaticFieldDataType.MultiLineText}
					rows={field.dataType === StaticFieldDataType.MultiLineText ? DEFAULT_MULTI__LINE_ROWS : 1}
					placeholder={
						field.placeholder === true ? `Enter ${(field.displayName ?? "").toLowerCase()}` : field.placeholder ? field.placeholder : ""
					}
					type={isNumber ? "number" : "text"}
					onBlur={handleBlur}
					error={!isValid}
					helperText={isValid ? "" : errorMessage}
				/>
			</Grid>
		</Grid>
	);
};

export default EditFormControlText;
