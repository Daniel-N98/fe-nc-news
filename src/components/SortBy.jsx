export default function SortBy({ sortBy, setSortBy }) {
  const handleChange = (event) => {
    setSortBy(event.target.selectedOptions[0].value);
  };

  return (
    <select
      id="sort-by"
      name="sort-by"
      className="small-border select-option"
      onChange={(event) => handleChange(event)}
    >
      <option value="none" selected hidden>
        {sortBy.replaceAll("_", " ")}
      </option>
      <option value="created_at">Date</option>
      <option value="comment_count">Comment count</option>
      <option value="votes" defaultChecked>
        Votes
      </option>
    </select>
  );
}
