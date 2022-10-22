import React, { useState, useEffect } from "react";
import MasonryLayout from "./MasonryLayout";
import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import Spinner from "./Spinner";

const Search = ({ searchTerm }) => {
  const [bins, setBins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    return () => {
      if(searchTerm){
        setLoading(true);
        const query = searchQuery(searchTerm.toLowerCase());

        client.fetch(query).then((data) => {
          setBins(data);
          setLoading(false);
        });

      } else {
        client.fetch(feedQuery).then((data) => {
          setBins(data);
          setLoading(false);
        });
      }
    }
  }, [searchTerm])
  

  return (
  <div>
    {loading && <Spinner message="Searching for bins..." />}
    {bins?.length !== 0 && <MasonryLayout bins={bins} />}
    {bins?.length === 0 && searchTerm!== '' && !loading &&(
      <div className="mt-10 text-center text-xl">
        <h2>No bins found</h2>
      </div>
    )}
  </div>);
};

export default Search;
