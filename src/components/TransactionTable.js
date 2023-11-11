import React from "react";

const TransactionTable = () => {
  return (
    <div className="px-10 my-10 w-full">
      <table className="rounded-md mx-auto">
        <tbody>
          <tr>
            <th className="table-cell border px-10">ID</th>
            <th className="table-cell border px-10">Title</th>
            <th className="table-cell border px-10">Description</th>
            <th className="table-cell border px-10">Price</th>
            <th className="table-cell border px-10">Category</th>
            <th className="table-cell border px-10">Sold</th>
            <th className="table-cell border px-10">Image</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
