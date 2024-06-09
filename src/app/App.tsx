import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Routes>
				<Route index element={<MainPage />} />
			</Routes>
		</>
	)
}
