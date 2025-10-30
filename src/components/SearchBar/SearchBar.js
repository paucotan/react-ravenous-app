import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import yelp from "../../utils/yelp";


const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
// make it so sortby changes when clicked

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
    // Call your search function here with searchTerm, location, and sortByOption
    yelp.search(searchTerm, location, sortByOption).then((businesses) => {
      props.setBusinesses(businesses);
    });
  };

  const handleSearch = async (event) => {
    // Add logic to search using searchTerm, location, and sortBy
    event.preventDefault();
    const businesses = await yelp.search(searchTerm, location, sortBy);
    // // Call a prop function here to update the business list in the parent component
    console.log(businesses);
    // In SearchBar.js, after you get the businesses from the API, call props.setBusinesses(businesses) (or setBusinesses(businesses) if using destructuring) instead of just logging them.
    props.setBusinesses(businesses);

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
      <form onSubmit={handleSearch}>
      <div className={styles.SearchBarFields}>
        <input onChange={handleSearchTermChange} placeholder="Search Businesses" />
        <input onChange={handleLocationChange} placeholder="Where?" />
      </div>
        <div className={styles.SearchBarSubmit}>
        <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
