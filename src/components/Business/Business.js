import React from "react";
import styles from "./Business.module.css";

const Business = (props) => {
  const business = props.business;
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <a href={business.url} target="_blank" rel="noopener noreferrer">
        <h2>{business.name}</h2>
      </a>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name + ', '
            + business.city + ', '
            + business.state + ' '
            + business.zipCode)}`}
             target="_blank" rel="noopener noreferrer">
            <p>{business.address}</p>
          </a>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
