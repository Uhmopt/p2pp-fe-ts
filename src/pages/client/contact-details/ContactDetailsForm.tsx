import { Box, Divider } from "@mui/material";
import { ClientDetail } from "api/client/client.types";
import { ContactDetail } from "api/contactDetail/contactDetail.types";
import EditForm from "components/form/EditForm";
import SectionHeader from "components/typography/SectionHeader";
import { useUser } from "context/UserContext";
import { PHONE_TYPES } from "context/phoneTypes";
import { useMemo } from "react";
import { DispatchFunction, StaticFieldDataType } from "types/ui-base-types";

const ContactDetailsForm = () => {
	const { userFormData, setUserFormData } = useUser();

	const contactDetail = useMemo(() => (userFormData?.contact_detail ?? {}) as ContactDetail, [userFormData?.contact_detail]);

	const handleChangeContactDetail: DispatchFunction<ContactDetail> = (value, name) => {
		setUserFormData({ ...(userFormData ?? {}), contact_detail: value });
	};

	const clientDetail = useMemo(() => (userFormData?.client_detail ?? {}) as ClientDetail, [userFormData?.client_detail]);

	const handleChangeClientDetail: DispatchFunction<ClientDetail> = (value, name) => {
		setUserFormData({ ...(userFormData ?? {}), client_detail: value });
	};

	return (
		<Box>
			<SectionHeader>Contact Details</SectionHeader>
			<br />
			<Divider />
			<br />
			<EditForm<ContactDetail>
				data={contactDetail}
				onChange={handleChangeContactDetail}
				fields={[
					{
						displayName: "Preferred method of contact",
						name: "primary_contact",
						dataType: StaticFieldDataType.Choice,
						options: ["Email", "Phone"],
					},
					{
						displayName: "Preferred time to contact",
						name: "preferred_time",
						dataType: StaticFieldDataType.Choice,
						options: ["Morning", "Midday", "Evening", "Weekend", "Office hours"],
					},
				]}
			/>
			<br />
			<EditForm<ClientDetail>
				data={clientDetail}
				onChange={handleChangeClientDetail}
				fields={[
					{ displayName: "Primary Phone Number", name: "phone1" },
					{
						displayName: "Primary Phone Number Type",
						name: "phone1_type",
						dataType: StaticFieldDataType.Choice,
						options: PHONE_TYPES,
					},
					{ displayName: "Address", name: "address1" },
				]}
			/>
			<br />
			<br />
		</Box>
	);
};

export default ContactDetailsForm;
