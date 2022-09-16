import "/shared/locales/i18n";
import { Form, Field } from "react-final-form";
import Head from "next/head";
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Select,
	Stack,
	useRadioGroup,
	useCheckbox,
	useCheckboxGroup,
	HStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FormSpy, useField } from "react-final-form";

export const CustomCheckbox = (props) => {
	return (
		<Field name={props.name} type="checkbox" value={props.value}>
			{({ input }) => <Checkbox {...input}>{props.label}</Checkbox>}
		</Field>
	);
};

export function CheckboxCard(props) {
	const { getCheckboxProps, getInputProps } = useCheckbox(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderWidth="1px"
				borderRadius="md"
				boxShadow="md"
				_checked={{
					bg: "yellow.500",
					color: "white",
					borderColor: "yellow.500",
				}}
				_focus={{
					boxShadow: "outline",
				}}
				px={5}
				py={3}
			>
				{props.children}
			</Box>
		</Box>
	);
}

export const CustomCheckboxCard = (props) => {
	return (
		<Field name={props.name} type="checkbox" value={props.value}>
			{({ input }) => (
				<CheckboxCard {...input} key={props.value}>
					{props.label}
				</CheckboxCard>
			)}
		</Field>
	);
};
