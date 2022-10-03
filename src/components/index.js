import React, { useEffect, useState } from "react";
import axios from "axios";
import NoResult from "./noResult";
import Search from "./search";
import SearchResult from "./searchResult";

function Index() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = (value) => {
    let url='';
    if (!value) {
      url = `https://api.jikan.moe/v4/characters?page=0&order_by=favorites&sort=desc`;
    } else {
      url = `https://api.jikan.moe/v4/characters?page=0&q=${value}&order_by=favorites&sort=desc`;
    }
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.data, "responses");
          setAnimeData(response.data.data);
          resolve();
        })
        .catch((err) => {
          resolve();
        });
    });
  };

  return (
    <div>
      <Search FetchData={FetchData} animeData={animeData} />
      {animeData.length > 0 ? (
        <SearchResult animeData={animeData} />
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default Index;
