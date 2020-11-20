import { useCallback, useState } from "react";
import { Magnifier } from "./Icons";
import { Input } from "./Input";

export function Search() {
  const [filter, setFilter] = useState("");
  const type = useCallback((event) => {
    setFilter(event.target.value);
  }, []);
  return (
    <Input
      size="md"
      placeholder="Search..."
      icon={<Magnifier />}
      onChange={type}
      value={filter}
      id="input-search"
      label="Assign Owner"
      hideLabel
      name="search"
    />
  );
}
