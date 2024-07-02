import React, { useState, useEffect } from 'react';
import './main.css';
import { FaUserCircle, FaCompass, FaLightbulb, FaComments, FaCode, FaImage, FaMicrophone, FaPaperPlane, FaMoon, FaSun } from 'react-icons/fa';

export const Main = () => {
  const [recentSearches, setRecentSearches] = useState(['Beautiful places to see on an upcoming road trip', 'Urban planning']);
  const [searchInput, setSearchInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const handleSearch = () => {
    if (searchInput) {
      setRecentSearches([searchInput, ...recentSearches]);
      setSearchInput('');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`main ${darkMode ? 'dark' : ''}`}>
      <div className="nav">
        <p>Gemini</p>
        <div className="nav-icons">
          <FaUserCircle className="user-icon" />
          <button onClick={toggleDarkMode} className="mode-toggle">
            {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>{greeting}, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FaCompass className="icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <FaLightbulb className="icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <FaComments className="icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <FaCode className="icon" />
          </div>
        </div>
        <div className="main-button">
          <div className="search-box">
            <input
              type='text'
              placeholder='Enter a prompt here'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="icon-container">
              <FaImage className="gallery-icon" />
              <FaMicrophone className="mic-icon" />
              <FaPaperPlane className="send-icon" onClick={handleSearch} />
            </div>
          </div>
          <div className="recent-searches">
            <h4>Recent Searches</h4>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search}</li>
              ))}
            </ul>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check it.
          </p>
        </div>
      </div>
    </div>
  );
}
