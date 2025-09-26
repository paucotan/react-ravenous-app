import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };
  const handleSearch = (event) => {
    // Add logic to search using searchTerm, location, and sortBy
    event.preventDefault();
    console.log(`Searching Yelp for ${searchTerm} in ${location} sorted by ${sortBy}`);
  }


  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
                onClick={() => handleSortByChange(sortByOptionValue)}
                key={sortByOptionValue}
                className={sortBy === sortByOptionValue ? styles.active : ""}
                >
                  {sortByOption}
              </li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input onChange={handleSearchTermChange} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
