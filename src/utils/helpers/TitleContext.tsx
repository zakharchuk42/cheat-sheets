import React, { createContext, ReactNode, useContext, useState } from 'react'

interface TitleContextType {
	title: string
	setTitle: (title: string) => void
}

const TitleContext = createContext<TitleContextType | undefined>(undefined)

const TitleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [title, setTitle] = useState('Cheat Sheets')

	return (
		<TitleContext.Provider value={{ title, setTitle }}>
			{children}
		</TitleContext.Provider>
	)
}

const useTitle = () => {
	const context = useContext(TitleContext)
	if (!context) {
		throw new Error('useTitle must be used within a TitleProvider')
	}
	return context
}

export { TitleProvider, useTitle }
