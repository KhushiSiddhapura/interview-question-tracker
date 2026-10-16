import {createContext, useState} from 'react';

export const MainData = createContext ();
export const MainProvider = ({children}) => {
  const [mockQuestion, setMockQuestion] = useState (
    JSON.parse (localStorage.getItem ('mockQuestion')) || []
  );
  const [quesEdit, setQuesEdit] = useState (null);

  return (
    <MainData.Provider
      value={{
        mockQuestion,
        setMockQuestion,
        quesEdit,
        setQuesEdit,
      }}
    >
      {children}
    </MainData.Provider>
  );
};
