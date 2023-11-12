import { useSelector } from "react-redux";
import EachTableRow from "./EachTableRow";

const TransactionTable = () => {
  const storedResults = useSelector(
    (store) => store?.searchResults?.searchResponse
  );
  return (
    <div className="px-10 my-10 w-full">
      <table className="rounded-md mx-auto bg-[#f8df8c] w-full">
        <tbody>
          <tr>
            <th className="table-cell border-2 px-10 py-2">ID</th>
            <th className="table-cell border-2 px-10 py-2">Title</th>
            <th className="table-cell border-2 px-10 py-2">Description</th>
            <th className="table-cell border-2 px-10 py-2">Price</th>
            <th className="table-cell border-2 px-10 py-2">Category</th>
            <th className="table-cell border-2 px-10 py-2">Sold</th>
            <th className="table-cell border-2 px-10 py-2">Image</th>
          </tr>
          {storedResults
            ? storedResults.map((each) => (
                <EachTableRow key={each?.id} data={each} />
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
