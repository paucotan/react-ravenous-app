import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {
  return (
    <div className={styles.BusinessList}>
      {props.businesses.map((business) => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
};

export default BusinessList;
