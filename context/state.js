import { useState, createContext } from 'react'

export const AppContext = createContext()

export function AppWrapper({ children }) {
  const [mode, setMode] = useState(false)

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}