import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { ProductService } from "./ProductService";
import { Dropdown } from "primereact/dropdown";
import "./DataTableDemo.module.css";

const DataTableEditDemo = (props) => {
  // console.log({ props });
  const { t } = useTranslation("voluntarios", { keyPrefix: "table" });
  const { pageSize, pageNum, setPageNum, data, isLoading, setPageSize } = props;
  const [products4, setProducts4] = useState(null);
  const toast = useRef(null);

  const columns = [
    { field: "NM_URNA_CANDIDATO", header: t("name"), width: "15%" },
    { field: "SG_PARTIDO", header: t("partyName"), width: "15%" },
    { field: "DS_CARGO", header: t("position"), width: "15%" },
    { field: "SG_UF", header: t("state"), width: "10%" },
    { field: "DS_URL", header: t("link"), widht: "30%" },
    { field: "hasBeenContacted", header: t("contact"), width: "15%" },
  ];

  const statuses = [
    { label: "In Stock", value: "INSTOCK" },
    { label: "Low Stock", value: "LOWSTOCK" },
    { label: "Out of Stock", value: "OUTOFSTOCK" },
  ];

  const dataTableFuncMap = {
    products4: setProducts4,
  };

  const productService = new ProductService();

  useEffect(() => {
    fetchProductData("products4");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchProductData = (productStateKey) => {
    productService
      .getProductsSmall()
      .then((data) => dataTableFuncMap[`${productStateKey}`](data));
  };

  const isPositiveInteger = (val) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const cellEditor = (options) => {
    if (options.field === "price") return priceEditor(options);
    else return textEditor(options);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(rowData.price);
  };

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
        <h5>Cell Editing with Sorting and Filter</h5>
        <DataTable
          value={data?.candidates}
          editMode="cell"
          className="editable-cells-table"
          filterDisplay="row"
          header="Stack"
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
        >
          {columns.map(({ field, header, width }) => {
            return (
              <Column
                key={field}
                field={field}
                header={header}
                filter
                sortable
                style={{ width }}
                body={field === "price" && priceBodyTemplate}
                editor={(options) => cellEditor(options)}
                onCellEditComplete={onCellEditComplete}
              />
            );
          })}
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableEditDemo;
