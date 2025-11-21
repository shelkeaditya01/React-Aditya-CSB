import { useState } from "react";
const CountryDropbox = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  const [country, setCountry] = useState("IN");

  return (
    <div>
      <label>Select Country:</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((c, i) => (
          <option key={i} value={c.value}>
            {c.name}
          </option>
        ))}
      </select>

      <select>
        {countries
          .filter((c) => c.value === country)[0]
          .cities.map((ci, i) => (
            <option key={i}>{ci}</option>
          ))}
      </select>
    </div>
  );
};

export default CountryDropbox;
