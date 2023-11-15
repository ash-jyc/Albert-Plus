// pages/index.js
import React, { useState } from 'react';
import Header from '../components/header'; // Assuming you have a Header component
import SearchResults from '../components/search-results';
import AcademicPathway from '../components/academic-pathway';
import Chat from '../components/chat';
import Footer from '../components/footer';
import styles from '../styles/home.module.css';

export default function Home() {
  // Default search results data
  const searchResultsData = [
    'Intro to ICDS',
    'Data Structures',
    'Algorithms',
    'Operating Systems',
    'Web Development'
  ];

  // Default academic pathway data
  const academicPathwayData = [
    { name: 'GPS', term: 'Fall 2023' },
    { name: 'Calculus', term: 'Fall 2023' },
    { name: 'Intro to Python', term: 'Fall 2023' },
    // Add more courses as needed
  ];

  // Default chat messages data
  const chatMessagesData = [
    { sender: 'PathFinder', text: 'Hi, I\'m Steve. And I am a freshman here at NYUSH.' },
    { sender: 'Steve', text: 'I\'m thinking about majoring in Computer Science and AI.' },
    // Add more messages as needed
  ];

  const [courses, setCourses] = useState(academicPathwayData);
  const [searchResults, setSearchResults] = useState(searchResultsData);
  const [messages, setMessages] = useState(chatMessagesData);

  // Function to simulate adding a new course to the pathway
  const handleCourseAdd = (courseName) => {
    setCourses([...courses, { name: courseName, term: 'Spring 2024 (predicted)' }]);
  };

  // Function to simulate sending a message
  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { sender: 'Steve', text: newMessage }]);
  };

  return (
    <>
      <Header />
      <SearchResults results={searchResults} />
      <div className={styles.mainContainer}>
        <div className={styles.academicPathwayContainer}>
          <AcademicPathway courses={courses} />
        </div>
        <div className={styles.chatContainer}>
          <Chat messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
      <Footer />
    </>
  );
}
