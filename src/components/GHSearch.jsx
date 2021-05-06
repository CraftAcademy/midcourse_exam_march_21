import React, { useState } from "react";
import { Button, Container, Header, Input } from "semantic-ui-react";
import axios from "axios";

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = async () => {
    let response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );
    setSearchResults(response.data.items);
  };

  const inputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  let displayResults = searchResults.map((user, i) => {
    return (
      <Container text>
        <Header>User {i}:</Header>
        <p>{JSON.stringify(user)}</p>
      </Container>
    );
  });

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
      {displayResults.length > 0 && (
        <div data-cy="results-display">{displayResults}</div>
      )}
    </>
  );
};

export default GHSearch;
