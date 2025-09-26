import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const businesses = [
  {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Pizza Palace",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Pizza",
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2503,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    name: "Burger Barn",
    address: "456 Elm St",
    city: "Boston",
    state: "MA",
    zipCode: "02110",
    category: "Burgers",
    rating: 4.0,
    reviewCount: 120
  }
];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
