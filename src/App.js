import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState({
    ResponseFromAPI: [],
  });
  const [query, setQuery] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&market=US&limit=10&offset=5`
      )
      .then((res) => {
        setSearch({ ResponseFromAPI: res.data.tracks.items });
      });
  }, [query]);

  const onKeyUpHandler = (e) => {
    console.log("hello");
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Song , Artist, Album"
        onKeyUp={onKeyUpHandler}
      />
      {query && (
        <div className="searchResult">
          <Dropdown search={search} />
        </div>
      )}

      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Artist Name" />
    </div>
  );
};

export default App;
