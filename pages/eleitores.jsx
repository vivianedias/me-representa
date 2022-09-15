import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form, Field } from "react-final-form";
import Head from "next/head";
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Input,
	Select,
	Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function CustomCheckbox(props) {
	return (
		<Field name={props.name} type="checkbox" value={props.value}>
			{({ input }) => <Checkbox {...input}>{props.label}</Checkbox>}
		</Field>
	);
}

function Identity({ t }) {
	return (
		<Stack spacing={2}>
			<Heading as="h2" size="sm" align="left">
				{t("filters.identity.label")}
			</Heading>
			<CheckboxGroup colorScheme="yellow">
				<Stack direction={"row"} wrap="wrap" align="start">
					<CustomCheckbox
						name="identity"
						value="black"
						label={t("filters.identity.black")}
					/>
					<CustomCheckbox
						name="identity"
						value="indigenous"
						label={t("filters.identity.indigenous")}
					/>
					<CustomCheckbox
						name="identity"
						value="women"
						label={t("filters.identity.women")}
					/>
					<CustomCheckbox
						name="identity"
						value="lgbt"
						label={t("filters.identity.lgbt")}
					/>
				</Stack>
			</CheckboxGroup>
		</Stack>
	);
}

function LGBT({ t }) {
	return (
		<Stack spacing={2}>
			<Heading as="h2" size="sm" align="left">
				{t("filters.lgbt.label")}
			</Heading>
			<CheckboxGroup colorScheme="yellow">
				<Stack spacing={4} direction={"row"}>
					<CustomCheckbox
						name="lgbt"
						value="lesbian"
						label={t("filters.lgbt.lesbian")}
					/>
					<CustomCheckbox
						name="lgbt"
						value="gay"
						label={t("filters.lgbt.gay")}
					/>
					<CustomCheckbox
						name="lgbt"
						value="bisexual"
						label={t("filters.lgbt.bisexual")}
					/>
					<CustomCheckbox
						name="lgbt"
						value="trans"
						label={t("filters.lgbt.trans")}
					/>
				</Stack>
			</CheckboxGroup>
		</Stack>
	);
}

function Parties({ t }) {
	return (
		<Heading as="h2" size="sm" align="left">
			{t("filters.parties.label")}
		</Heading>
	);
}

function Priorities({ t }) {
	return (
		<Stack spacing={2}>
			<Heading as="h2" size="sm" align="left">
				{t("filters.priorities.label")}
			</Heading>
			<CheckboxGroup colorScheme="yellow">
				<Stack spacing={4} direction={"column"}>
					<CustomCheckbox
						name="priorities"
						value="corruption"
						label={t("filters.priorities.corruption")}
					/>
					<CustomCheckbox
						name="priorities"
						value="gender"
						label={t("filters.priorities.gender")}
					/>
					<CustomCheckbox
						name="priorities"
						value="drugs"
						label={t("filters.priorities.drugs")}
					/>
					<CustomCheckbox
						name="priorities"
						value="security"
						label={t("filters.priorities.security")}
					/>
					<CustomCheckbox
						name="priorities"
						value="migration"
						label={t("filters.priorities.migration")}
					/>
					<CustomCheckbox
						name="priorities"
						value="race"
						label={t("filters.priorities.race")}
					/>
					<CustomCheckbox
						name="priorities"
						value="traditionalPopulationEnvironment"
						label={t("filters.priorities.traditionalPopulationEnvironment")}
					/>
					<CustomCheckbox
						name="priorities"
						value="healthEducationWork"
						label={t("filters.priorities.healthEducationWork")}
					/>
				</Stack>
			</CheckboxGroup>
		</Stack>
	);
}

function State({ t }) {
	return (
		<Stack spacing={2}>
			<Field name={props.name} type="select">
				{({ input }) => (
					<Select placeholder={t("filters.state.label")} {...input}>
						{props.label}
						<option value="SP">SP</option>
						<option value="RJ">RJ</option>
						<option value="ES">ES</option>
					</Select>
				)}
			</Field>

			<Heading as="h2" size="sm" align="left">
				{t("filters.state.label")}
			</Heading>
			<Select placeholder={t("filters.state.label")}>
				<option value="SP">SP</option>
				<option value="RJ">RJ</option>
				<option value="ES">ES</option>
			</Select>
		</Stack>
	);
}

export default function EleitoresDashboard({ data }) {
	const { t } = useTranslation("translation", { keyPrefix: "eleitores" });

	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const onSubmit = async (data) => {
		await sleep(300);
		console.log({ data });
	};

	return (
		<>
			<Head>
				<title>{t("title")}</title>
				<meta property="og:title" content={t("title")} key="title" />
			</Head>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
				p="1rem"
				backgroundColor="whiteAlpha.900"
				boxShadow="md"
			>
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit, submitting, submitError, ...rest }) => {
						console.log(rest.values);
						return (
							<Box
								as="form"
								onSubmit={handleSubmit}
								bgColor="white"
								w={{ base: "85vw", md: "768px" }}
							>
								<Stack spacing={8}>
									<Heading as="h1" size="md" align="left">
										{t("filters.heading")}
									</Heading>

									<Identity t={t} />
									<LGBT t={t} />
									<Parties t={t} />
									<Priorities t={t} />
									{/* <State t={t} /> */}

									<Button
										type="submit"
										isLoading={submitting}
										loadingText="Filtrando"
										variant="solid"
										colorScheme="pink"
										size="md"
									>
										{t("filters.button")}
									</Button>
								</Stack>
							</Box>
						);
					}}
				/>
			</Stack>
		</>
	);
}

export async function getServerSideProps(req, res) {
	// Fetch data from external API
	// const data = await fetchClient("/api/users");

	// Pass data to the page via props
	return { props: { data: [] } };
}
