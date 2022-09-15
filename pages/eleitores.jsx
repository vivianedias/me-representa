import fetchClient from "../utils/apiClient";
import "../shared/locales/i18n";
import { Form } from "react-final-form";
import Head from "next/head";
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Select,
	Stack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Identity({ t }) {
	return (
		<Stack spacing={2}>
			<Heading as="h2" size="sm" align="left">
				{t("filters.identity.label")}
			</Heading>
			<CheckboxGroup
				colorScheme="yellow"
				defaultValue={["black", "indigenous", "women", "lgbt"]}
			>
				<Stack direction={"row"} wrap="wrap" align="start">
					<Checkbox value="black">{t("filters.identity.black")}</Checkbox>
					<Checkbox value="indigenous">
						{t("filters.identity.indigenous")}
					</Checkbox>
					<Checkbox value="women">{t("filters.identity.women")}</Checkbox>
					<Checkbox value="lgbt">{t("filters.identity.lgbt")}</Checkbox>
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
			<CheckboxGroup
				colorScheme="yellow"
				defaultValue={["lesbian", "gay", "bisexual", "trans"]}
			>
				<Stack spacing={4} direction={"row"}>
					<Checkbox value="lesbian">{t("filters.lgbt.lesbian")}</Checkbox>
					<Checkbox value="gay">{t("filters.lgbt.gay")}</Checkbox>
					<Checkbox value="bisexual">{t("filters.lgbt.bisexual")}</Checkbox>
					<Checkbox value="trans">{t("filters.lgbt.trans")}</Checkbox>
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
			<CheckboxGroup
				colorScheme="yellow"
				defaultValue={["gender", "security", "race"]}
			>
				<Stack spacing={4} direction={"column"}>
					<Checkbox value="corruption">
						{t("filters.priorities.corruption")}
					</Checkbox>
					<Checkbox value="gender">{t("filters.priorities.gender")}</Checkbox>
					<Checkbox value="drugs">{t("filters.priorities.drugs")}</Checkbox>
					<Checkbox value="security">
						{t("filters.priorities.security")}
					</Checkbox>
					<Checkbox value="migration">
						{t("filters.priorities.migration")}
					</Checkbox>
					<Checkbox value="race">{t("filters.priorities.race")}</Checkbox>
					<Checkbox value="traditionalPopulationEnvironment">
						{t("filters.priorities.traditionalPopulationEnvironment")}
					</Checkbox>
					<Checkbox value="healthEducationWork">
						{t("filters.priorities.healthEducationWork")}
					</Checkbox>
				</Stack>
			</CheckboxGroup>
		</Stack>
	);
}

function State({ t }) {
	return (
		<Stack spacing={2}>
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
					render={({ handleSubmit, submitting, submitError }) => {
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
									<State t={t} />

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
