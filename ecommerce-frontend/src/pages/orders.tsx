import { useState, type ReactElement } from "react";
import TableHOC from "../components/admin/TableHOC";
import type { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Order = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "djfhdfhd",
      amount: 100000,
      quantity: 4,
      discount: 100,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/djfhdfhd`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Order;
