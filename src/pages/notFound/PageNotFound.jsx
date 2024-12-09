import React from 'react';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://media.istockphoto.com/id/1415203156/vector/error-page-page-not-found-vector-icon-in-line-style-design-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=RuQ_sn-RjAVNKOmARuSf1oXFkVn3OMKeqO5vw8GYoS8=" // Replace with the path to your icon
        alt="Page Not Found Icon"
        style={styles.icon}
      />
      <h1 style={styles.title}>OOPS, Page Not Found</h1>
      <p style={styles.message}>
        The page you are searching for could not be found.
      </p>
    </div>
  );
};

export default PageNotFound;
