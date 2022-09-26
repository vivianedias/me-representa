import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProductService } from "./ProductService";
import "./DataTableDemo.module.css";

const DataTableEditDemo = () => {
  const [products4, setProducts4] = useState(null);
  const toast = useRef(null);

  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "quantity", header: "Quantity" },
    { field: "price", header: "Price" },
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

  return (
    <div className="datatable-editing-demo">
      <Toast ref={toast} />

      <div className="card p-fluid">
        <h5>Cell Editing with Sorting and Filter</h5>
        <DataTable
          value={products4}
          editMode="cell"
          className="editable-cells-table"
          filterDisplay="row"
          responsiveLayout="scroll"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
        >
          {columns.map(({ field, header }) => {
            return (
              <Column
                key={field}
                field={field}
                header={header}
                filter
                sortable
                style={{ width: "25%" }}
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
