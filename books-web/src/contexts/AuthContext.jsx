import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [theme, setTheme] = useState('primary');

  const toggleTheme = () => {
    setTheme(theme === 'primary' ? 'dark' : 'primary');
  }

  return (
    <AuthContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
