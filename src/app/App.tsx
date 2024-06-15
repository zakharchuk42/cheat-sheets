import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import { AppPages } from '../utils/constants/app-pages.ts'
import JSPage from '../pages/JSPage'
import JSEventLoopPage from '../pages/JSEventLoopPage'
import JSEnvironmentExamplesPage from '../pages/JSEventLoopExamplesPage'
import JSEventLoopTasksPage from '../pages/JSEventLoopTasksPage'
import JSEventLoopUsefulPage from '../pages/JSEventLoopUsefulPage'
import DefaultLayout from '../layouts/DefaultLayout.tsx'
import JSEnvironmentPage from '../pages/JSEnvironmentPage'
import JSEnvironmentTasksPage from '../pages/JSEnvironmentTasksPage'
import JSEventLoopExamplesPage from '../pages/JSEnvironmentExamplesPage'
import JSArrayMethodsPage from '../pages/JSArrayMethodsPage'
import JSEventsPage from '../pages/JSEventsPage'
import JSLocalStoragePage from '../pages/JSLocalStoragePage'
import JSLocalStorageExamplesPage from '../pages/JSLocalStorageExamplesPage'

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
				<Route
					path={AppPages.JS_ENVIRONMENT}
					element={<JSEnvironmentPage />}
				/>
				<Route
					path={AppPages.JS_ENVIRONMENT_EXAMPLES}
					element={<JSEnvironmentExamplesPage />}
				/>
				<Route
					path={AppPages.JS_ENVIRONMENT_TASKS}
					element={<JSEnvironmentTasksPage />}
				/>
				<Route
					path={AppPages.JS_ARRAY_METHODS}
					element={<JSArrayMethodsPage />}
				/>
				<Route path={AppPages.JS_EVENTS} element={<JSEventsPage />} />
				<Route
					path={AppPages.JS_LOCAL_STORAGE}
					element={<JSLocalStoragePage />}
				/>
				<Route
					path={AppPages.JS_LOCAL_STORAGE_EXAMPLES}
					element={<JSLocalStorageExamplesPage />}
				/>
			</Routes>
		</DefaultLayout>
	)
}
