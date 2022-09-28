import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React from "react";
import { useTranslation } from "react-i18next";
import NextLink from "next/link";

import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import StatusBadge, { INVITED, NOT_INVITED } from "./StatusBadge";
import CopyText from "./CopyText";
import normalizeName from "../../../utils/normalizeName";
import states from "/public/data/states.json";
import politicalParties from "/public/data/politicalParties.json";
import positions from "/public/data/positions.json";

const DataTableEditDemo = (props) => {
  const { t } = useTranslation("voluntarios", { keyPrefix: "table" });
  const {
    pageSize,
    pageNum,
    setPageNum,
    data,
    isLoading,
    setPageSize,
    onRowEditComplete,
  } = props;

  const nameBodyTemplate = (rowData) => {
    return normalizeName(rowData.NM_URNA_CANDIDATO);
  };

  const positionBodyTemplate = (rowData) => {
    return normalizeName(rowData.DS_CARGO);
  };

  const linkBodyTemplate = (rowData) => {
    return (
      <NextLink href={rowData.DS_URL} passHref>
        <Link
          target="_blank"
          color={"pink.500"}
          maxWidth={{ base: "200px", md: "inherit" }}
        >
          {rowData.DS_URL}
        </Link>
      </NextLink>
    );
  };

  const statusBodyTemplate = (rowData) => {
    return <StatusBadge status={rowData.candidateInviteStatus} />;
  };

  const statusEditor = (options) => {
    const statuses = [
      { label: "Contatado", value: INVITED },
      { label: "Não contatado", value: NOT_INVITED },
    ];

    return (
      <Dropdown
        value={options.value}
        options={statuses}
        optionLabel="label"
        optionValue="value"
        onChange={(e) => options.editorCallback(e.value)}
        placeholder={t("placeholder")}
        itemTemplate={(option) => {
          return <StatusBadge status={option.value} />;
        }}
      />
    );
  };

  const cellEditor = (options) => {
    if (options.field === "candidateInviteStatus") return statusEditor(options);
    if (options.field === "NM_URNA_CANDIDATO" || options.field === "DS_CARGO")
      return normalizeName(options.value);
    else return options.value;
  };

  const stateRowFilterTemplate = (options) => {
    const statesOptions = states.map((state) => ({
      value: state,
      label: state,
    }));

    return (
      <MultiSelect
        value={options.value}
        options={statesOptions}
        onChange={(e) => options.filterApplyCallback(e.value)}
        name={options.field}
        placeholder={t("filters.placeholder")}
        maxSelectedLabels={1}
      />
    );
  };

  const positionRowFilterTemplate = (options) => {
    const availablePositions = positions.map((position) => ({
      value: position,
      label: normalizeName(position),
    }));

    return (
      <MultiSelect
        value={options.value}
        options={availablePositions}
        onChange={(e) => options.filterApplyCallback(e.value)}
        name={options.field}
        placeholder={t("filters.placeholder")}
        maxSelectedLabels={1}
      />
    );
  };

  const partiesRowFilterTemplate = (options) => {
    const politicalPartiesOptions = politicalParties.map((party) => ({
      value: party,
      label: party,
    }));
    return (
      <MultiSelect
        value={options.value}
        options={politicalPartiesOptions}
        onChange={(e) => options.filterApplyCallback(e.value)}
        name={options.field}
        placeholder={t("filters.placeholder")}
        maxSelectedLabels={1}
      />
    );
  };

  const columns = [
    {
      field: "NM_URNA_CANDIDATO",
      header: t("name"),
      width: "15%",
      body: nameBodyTemplate,
      showFilterMenu: true,
    },
    {
      field: "SG_PARTIDO",
      header: t("partyName"),
      width: "15%",
      filterElement: partiesRowFilterTemplate,
    },
    {
      field: "DS_CARGO",
      header: t("position"),
      width: "15%",
      body: positionBodyTemplate,
      filterElement: positionRowFilterTemplate,
    },
    {
      field: "SG_UF",
      header: t("state"),
      width: "10%",
      filterElement: stateRowFilterTemplate,
    },
    {
      field: "DS_URL",
      header: t("link"),
      width: "25%",
      body: linkBodyTemplate,
      filter: false,
    },
    {
      field: "candidateInviteStatus",
      header: t("contact"),
      width: "10%",
      body: statusBodyTemplate,
      filter: false,
    },
  ];

  const template = {
    layout:
      "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
      ];

      return (
        <Dropdown
          value={pageSize}
          options={dropdownOptions}
          onChange={(e) => setPageSize(e.target.value)}
        />
      );
    },
  };

  return (
    <Box>
      <Box maxW={"1000px"} mb={8} p={{ base: 6, "2xl": 0 }}>
        <VStack spacing={4} align="flex-start">
          <Heading as="h1">{t("title")}</Heading>
          <Text fontSize="xl">{t("subtitle1")}</Text>
          <Text fontSize="xl">
            {t("subtitle2")}{" "}
            <Text
              as="mark"
              fontSize="lg"
              borderBottom={"4px"}
              borderColor={"purple.100"}
              fontWeight={600}
              bgColor="transparent"
            >
              {t("contact")}
            </Text>{" "}
            {t("subtitle3")}{" "}
            <Text
              as="mark"
              fontSize="lg"
              px={2}
              py={1.5}
              rounded="full"
              bgColor={"teal.100"}
              fontWeight={600}
            >
              {t("badges.invited")}
            </Text>
          </Text>
        </VStack>
      </Box>
      <Box>
        <DataTable
          value={data?.candidates}
          editMode="row"
          filterDisplay="row"
          header={t("tableName")}
          responsiveLayout="stack"
          breakpoint={"62em"}
          paginator
          paginatorTemplate={template}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={pageSize}
          first={pageNum - 1}
          onPage={(e) => setPageNum(e.first + 1)}
          rowsPerPageOptions={[10, 20, 50]}
          totalRecords={data?.count}
          lazy
          loading={isLoading}
          onRowEditComplete={onRowEditComplete}
          emptyMessage={t("notFound")}
        >
          {columns.map(
            ({
              field,
              header,
              width,
              body,
              filter = true,
              showFilterMenu = false,
              filterElement,
            }) => {
              return (
                <Column
                  key={field}
                  field={field}
                  header={header}
                  style={{ width }}
                  body={body}
                  editor={cellEditor}
                  filter={filter}
                  showFilterMenu={showFilterMenu}
                  filterElement={filterElement}
                  filterMenuStyle={{ width }}
                />
              );
            }
          )}
          <Column
            headerStyle={{ width: "5%", textAlign: "center" }}
            header={t("copyHeader")}
            bodyStyle={{ textAlign: "center" }}
            body={CopyText}
          />
          <Column
            rowEditor
            headerStyle={{ width: "5%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          />
        </DataTable>
      </Box>
    </Box>
  );
};

export default DataTableEditDemo;
