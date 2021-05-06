import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const searchHandler = async () => {
    let response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`)
    setSearchResults(response.data.items)
  };

  const inputHandler = (event) => {
    setSearchQuery(event.target.value)
  }

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
        onChange={(event) => inputHandler(event)}
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
      {
        (displayResults.length > 0) && <div data-cy="results-display">{displayResults}</div>
      }      
    </>
  );
};

export default GHSearch;
