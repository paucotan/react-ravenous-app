import React, { useState } from "react";
import styles from "./App.module.css";


import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [businesses, setBusinesses] = React.useState([]); // Placeholder for business state


  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
