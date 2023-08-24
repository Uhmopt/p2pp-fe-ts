import { Box, Divider } from "@mui/material";
import { UserDetail } from "api/user/user.types";
import EditForm from "components/form/EditForm";
import SectionHeader from "components/typography/SectionHeader";
import { useUser } from "context/UserContext";
import { useEffect, useState } from "react";
import { FieldFormat, StaticFieldDataType } from "types/ui-base-types";

const ClientBasicInformation = () => {
	const { user } = useUser();

	const [formData, setFormData] = useState<UserDetail>({} as UserDetail);

	useEffect(() => {
		if (user?.user_detail) {
			setFormData(user?.user_detail);
		}
	}, [JSON.stringify(user)]);

	return (
		<Box>
			<SectionHeader>Basic Information</SectionHeader>
			<br />
			<Divider />
			<br />
			<EditForm<UserDetail>
				data={formData}
				onChange={setFormData}
				fields={[
					{ displayName: "First Name", name: "first_name" },
					{ displayName: "Surname", name: "last_name" },
					{ displayName: "Middle Name", name: "middle_name" },
					{ displayName: "Preferred Name", name: "preferred_name" },
					{ displayName: "Maiden Name", name: "maiden_name" },
					{ displayName: "Last Previous Name", name: "last_previous_name" },
					{ displayName: "Date of birth", name: "birth", dataType: StaticFieldDataType.DateTime, format: FieldFormat.DateOnly },
					{ displayName: "Email", name: "email" },
					{ displayName: "Mapped Adviser", name: "mapped_adviser" },
					{ displayName: "Client Status", name: "client_status" },
				]}
			/>
			<br />
			<br />
			<SectionHeader>Contact Details</SectionHeader>
			<br />
			<Divider />
			<br />
			<EditForm<UserDetail>
				data={formData}
				onChange={setFormData}
				fields={[
					{ displayName: "Phone", name: "phone1" },
					{ displayName: "Mobile", name: "phone1" },
					{ displayName: "Email", name: "email" },
					{ displayName: "Preferred Contact Name", name: "preferred_contact_name" },
					{ displayName: "Address", name: "address1" },
				]}
			/>
		</Box>
	);
};

export default ClientBasicInformation;
