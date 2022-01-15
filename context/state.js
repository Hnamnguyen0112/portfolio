import { useState, createContext } from 'react'

export const AppContext = createContext()

export function AppWrapper({ children }) {
  const [mode, setMode] = useState(false)
  const [dialog, setDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState({ title: '', message: '', close: '' })

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        dialog,
        setDialog,
        dialogContent,
        setDialogContent
      }}
    >
      {children}
    </AppContext.Provider>
  )
}