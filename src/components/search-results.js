import styles from '../styles/search-results.module.css';
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      {results.map((result, index) => (
        <span key={index} className={styles.resultTag}>{result}</span>
      ))}
    </div>
  );
};

export default SearchResults;