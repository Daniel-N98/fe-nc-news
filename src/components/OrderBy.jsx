export default function OrderBy({ orderBy, setOrderBy }) {
  const handleChange = (event) => {
    setOrderBy(event.target.selectedOptions[0].value);
  };
  
  return (
    <select
      name="order-by"
      id="order-by"
      className="small-border select-option"
      onChange={(event) => handleChange(event)}
    >
      <option value="none" defaultChecked hidden>
        {orderBy.toLowerCase()}ending
      </option>
      <option value="DESC">Descending</option>
      <option value="ASC" defaultChecked>
        Ascending
      </option>
    </select>
  );
}
