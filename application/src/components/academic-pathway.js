import React from 'react';
import styles from '../styles/academic-pathway.module.css';

const AcademicPathway = ({ courses }) => {
  return (
    <div className={styles.academicPathway}>
      <h2>Academic Pathway</h2>
      {courses.map((course, index) => (
        <div key={index} className={styles.course}>
          {course.name} - {course.term}
        </div>
      ))}
    </div>
  );
};

export default AcademicPathway;
