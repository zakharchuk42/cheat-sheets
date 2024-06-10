import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import { AppPages } from '../utils/constants/app-pages.ts'
import JSPage from '../pages/JSPage'
import JSEventLoopPage from '../pages/JSEventLoopPage'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path={AppPages.JS} element={<JSPage />} />
				<Route
					path={AppPages.JS_EVENT_LOOP}
					element={<JSEventLoopPage />}
				/>
			</Routes>
		</>
	)
}
