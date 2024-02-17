const EachTableRow = ({ data }) => {
  const { id, category, sold, image, title, price, description } = data;
  return (
    <tr>
      <td className="table-cell border-2 p-2 px-10">{id}</td>
      <td className="table-cell border-2 p-2 max-w-xs">{title}</td>
      <td className="table-cell border-2 p-2 max-w-md">{description}</td>
      <td className="table-cell border-2 p-2 px-10">{price}</td>
      <td className="table-cell border-2 p-2 px-10">{category}</td>
      <td className="table-cell border-2 p-2 px-10">
        {sold === 0 ? "false" : "true"}
      </td>
      <td className="table-cell border-2 p-2 px-10">
        <img src={image} className="w-20" alt="tableImageCell" />
      </td>
    </tr>
  );
};

export default EachTableRow;
