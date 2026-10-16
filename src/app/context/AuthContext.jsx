import {createContext, useState} from 'react';

export const Data = createContext ();

export const DataProvider = ({children}) => {
  const [users, setUsers] = useState (
    JSON.parse (localStorage.getItem ('users')) || []
  );
  const [activeUser, setActiveUser] = useState (
    JSON.parse (localStorage.getItem ('activeUser'))
  );

  return (
    <Data.Provider
      value={{
        users,
        setUsers,
        activeUser,
        setActiveUser,
      }}
    >
      {children}{' '}
    </Data.Provider>
  );
};
