import React, {useState} from "react";
import { Button, Input } from "semantic-ui-react";

const GHSearch = () => {
  const [count, setCount] = useState()
  const [users, setUsers] =useState()


  return (
    <>
      <Input
        type="text"
        name="search"
        placeholder="Input GH username"
        data-cy="search-input"
      />
      <Button name="search" data-cy="search-button" onClick={()=> setCount(count)}>
        Search
      </Button>
    {
    
    }
      <p >Search Reasults {users}</p>
    </>
  );
};

export default GHSearch;
