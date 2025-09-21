import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Selection,
  Inject,
  Toolbar,
  Filter,
  Edit,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 text-white rounded-3xl">
      <Header category="page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbar={["Delete"]}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
