import React, { useReducer } from 'react'
import Navbar from './components/Navbar'

const initialstate = {
  Sidebar: false,
  SidebarClose: false
}
export const userContext = React.createContext(initialstate)
const reducer = (state, action) => {
  switch (action.type) {
    case 'Sidebar':
      return {
        ...state,
        Sidebar: true,
      }
    case 'SidebarClose':
      return {
        ...state,
        Sidebar: false,
        SidebarClose: true
      }
  }
}
  function App() {
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
      <>
      <userContext.Provider value={{...state,dispatch}}>
        <Navbar state={state} dispatch={dispatch} />
        </userContext.Provider>

      </>
    )
  }

  export default App
