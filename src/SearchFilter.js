import { useState } from "react";
const SearchFilter = () => {
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Watermelon",
  ];

  const [search, setSearch] = useState("");
  const filteredItems = items.filter((i) =>
    i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <h1>Search Fruits</h1>
        <input
          placeholder="Type to search .."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div style={{ marginTop: "10px" }}>
        {filteredItems.length > 0 ? (
          <ul>
            {filteredItems.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          "No items are found"
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
