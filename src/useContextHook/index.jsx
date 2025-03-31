import React, { createContext, useState, useContext } from 'react';

// Create the Theme context
const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Component to toggle theme
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access context

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Toggle App</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
