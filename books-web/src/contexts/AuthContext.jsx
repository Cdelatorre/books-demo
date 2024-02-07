import { createContext, useEffect, useState } from 'react';
import { getUserId } from '../utils/storage';
import { getUser } from '../services/usersService';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const id = getUserId();

    if (!id) {
      setIsLoaded(true)
    } else {
      getUser(id)
        .then((user) => {
          setUser(user)
        })
        .finally(() => {
          setIsLoaded(true)
        })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoaded }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
