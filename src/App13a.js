import { useState, createContext, useContext } from "react";
import Childa from "./Childa";
export const UserContext = createContext();
 function App13a() {
  const [user, setUser] = useState("John",);
  

  
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <h2>Hello {user} from App13a component</h2>
        <Childa />
        
      </UserContext.Provider>
    </>
  );
}

export default App13a