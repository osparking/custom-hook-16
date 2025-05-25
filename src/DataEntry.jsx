import { useEffect, useState } from "react";
import { useDebounce } from "./myHooks";

const DataEntry = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  
  useEffect(() => {
    console.log("중간 검색 용어 : ", searchTerm);
    
  }, [debouncedSearchTerm]);


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('제출된 검색 용어:', searchTerm);
    // Perform search logic here, e.g., make an API call
  };  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">검색 키:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default DataEntry
