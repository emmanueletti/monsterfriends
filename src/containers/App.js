import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from '../components/CardList';
import Search from '../components/Search';
import ErrorBoundary from '../components/ErrorBoundary';

import './app.css';

export default function App() {
  const [appState, setAppState] = useState({
    robots: [],
    filteredRobots: [],
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setAppState((prev) => {
        return { ...prev, robots: res.data, filteredRobots: res.data };
      });
    });
  }, []);

  const updateFilteredRobots = (queryString) => {
    const filteredRobots = appState.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(queryString.toLowerCase());
    });
    setAppState((prev) => {
      return { ...prev, filteredRobots: filteredRobots };
    });
  };

  return (
    <>
      <h1 className='title'>MONSTER FRIENDS</h1>
      <Search updateFilteredRobots={updateFilteredRobots} />
      {appState.robots.length ? (
        <ErrorBoundary>
          <CardList robots={appState.filteredRobots} />
        </ErrorBoundary>
      ) : (
        <h1 className='loading'>Loading...</h1>
      )}
    </>
  );
}
