import {createContext,useState} from 'react'; 

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [userDetails, setUserDetails] = useState([])

  const handleUser = (v) => {
    console.log(v)
    setUserDetails(v)
  }

  return (
    <div>
      <UserContext.Provider value={{userDetails, handleUser}}>{children}</UserContext.Provider>
    </div>
  )
}
