import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const searchHandler = async () => {
    let response = await axios.get('https://api.github.com/search/users?q=sevader14')
    setSearchResults(response.data.items)
  };

  let displayResults = searchResults.map((user) => {
    return (
      <>
      <p>{user.login}</p>
      <p>{user.id}</p>
      <p>{user.html_url}</p>
      </>
    )    
  })

  return (
    <>
      <Input
      
        data-cy="user-search-input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button
        onClick={() => searchHandler()}
        data-cy="search-button"
        name="search"
      >
        Search
      </Button>
      <div data-cy="results-display">{displayResults}</div>
    </>
  );
};

export default GHSearch;
