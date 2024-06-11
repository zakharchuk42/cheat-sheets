import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import { AppPages } from '../utils/constants/app-pages.ts'
import JSPage from '../pages/JSPage'
import JSEventLoopPage from '../pages/JSEventLoopPage'
import JSEventLoopExamplesPage from '../pages/JSEventLoopExamplesPage'
import JSEventLoopTasksPage from '../pages/JSEventLoopTasksPage'
import JSEventLoopUsefulPage from '../pages/JSEventLoopUsefulPage'
import DefaultLayout from '../layouts/DefaultLayout.tsx'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<DefaultLayout>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path={AppPages.JS} element={<JSPage />} />
				<Route
					path={AppPages.JS_EVENT_LOOP}
					element={<JSEventLoopPage />}
				/>
				<Route
					path={AppPages.JS_EVENT_LOOP_EXAMPLES}
					element={<JSEventLoopExamplesPage />}
				/>
				<Route
					path={AppPages.JS_EVENT_LOOP_TASKS}
					element={<JSEventLoopTasksPage />}
				/>
				<Route
					path={AppPages.JS_EVENT_LOOP_USEFUL}
					element={<JSEventLoopUsefulPage />}
				/>
			</Routes>
		</DefaultLayout>
	)
}
