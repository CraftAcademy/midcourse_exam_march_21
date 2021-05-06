import React, {useState} from "react";
import { Button, Input } from "semantic-ui-react";
import axios from 'axios'

const GHSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const searchHandler = () => {
    debugger
  }

  return (
    <>
      <Input
        data-cy="user-search-input"
        type="text"
        name="search"
        placeholder="Input GH username"
      />
      <Button onClick={() => searchHandler()} data-cy="search-button" name="search">
        Search
      </Button>
    </>
  );
};

export default GHSearch;
