import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import NextLink from "next/link";

import { Heading, Link } from "@chakra-ui/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";

import StatusBadge, { INVITED, NOT_INVITED } from "./StatusBadge";
import normalizeName from "../../../utils/normalizeName";

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
  const toast = useRef(null);

  const nameBodyTemplate = (rowData) => {
    return normalizeName(rowData.NM_URNA_CANDIDATO);
  };

  const positionBodyTemplate = (rowData) => {
    return normalizeName(rowData.DS_CARGO);
  };

  const linkBodyTemplate = (rowData) => {
    return (
      <NextLink href={rowData.DS_URL} passHref>
        <Link target="_blank" color={"pink.500"}>
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

  const columns = [
    {
      field: "NM_URNA_CANDIDATO",
      header: t("name"),
      width: "15%",
      body: nameBodyTemplate,
    },
    { field: "SG_PARTIDO", header: t("partyName"), width: "15%" },
    {
      field: "DS_CARGO",
      header: t("position"),
      width: "15%",
      body: positionBodyTemplate,
    },
    { field: "SG_UF", header: t("state"), width: "10%" },
    {
      field: "DS_URL",
      header: t("link"),
      widht: "25%",
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
    <div className="datatable-editing-demo">
      <Toast ref={toast} />

      <div className="card p-fluid">
        <Heading as="h1">{t("title")}</Heading>
        <DataTable
          value={data?.candidates}
          editMode="row"
          className="editable-cells-table"
          // filterDisplay="row"
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
        >
          {columns.map(({ field, header, width, body, filter = false }) => {
            return (
              <Column
                key={field}
                field={field}
                header={header}
                // filter={filter}
                style={{ width }}
                body={body}
                editor={cellEditor}
              />
            );
          })}
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableEditDemo;
