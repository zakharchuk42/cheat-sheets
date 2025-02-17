import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../pages'
import { AppPages } from '../utils/constants/app-pages.ts'
import JSPage from '../pages/js'

import DefaultLayout from '../layouts/DefaultLayout.tsx'
import JSEventLoopPage from '../pages/js/event-loop/EventLoopPage'
import JSEventLoopExamplesPage from '../pages/js/event-loop/ExamplesPage'
import JSEventLoopTasksPage from '../pages/js/event-loop/TasksPage'
import JSEventLoopUsefulPage from '../pages/js/event-loop/UsefulPage'
import JSEnvironmentPage from '../pages/js/environment/EnvironmentPage'
import JSEnvironmentExamplesPage from '../pages/js/environment/ExamplesPage'
import JSEnvironmentTasksPage from '../pages/js/environment/TasksPage'
import JSArrayMethodsPage from '../pages/js/ArrayMethodsPage'
import JSEventsPage from '../pages/js/EventsPage'
import JSLocalStoragePage from '../pages/js/LocalStoragePage'
import JSObjectPage from '../pages/js/objects/ObjectPage'
import JSLogicOperatorsPage from '../pages/js/logic-operators/LogicOperatorsPage'
import JSLogicOperatorsTasksPage from '../pages/js/logic-operators/TasksPage'
import JSVariablesPage from '../pages/js/VariablesPage'
import JSPrototypePage from '../pages/js/PrototypePage'
import JSDataTypesPage from '../pages/js/DataTypes/JSDataTypesPage.tsx'
import JSHowBrowserWorkPage from '../pages/js/HowBrowserWorkPage'
import JSThisPage from '../pages/js/this/ThisPage/JSThisPage.tsx'
import JSThisTasksPage from '../pages/js/this/TasksPage'
import HotKeysPage from '../pages/hotKeys'
import JSObjectMethodsPage from '../pages/js/objects/ObjectMethodsPage'
import CSSPage from '../pages/css'
import CSSCursorPage from '../pages/css/Cursor'
import CSSTruncateTextPage from '../pages/css/TruncateTextPage'

export const App: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<DefaultLayout>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path={AppPages.HOT_KEYS} element={<HotKeysPage />} />
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
					path={AppPages.JS_VARIABLES}
					element={<JSVariablesPage />}
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
				<Route path={AppPages.JS_OBJECT} element={<JSObjectPage />} />
				<Route
					path={AppPages.JS_OBJECT_METHODS}
					element={<JSObjectMethodsPage />}
				/>
				<Route
					path={AppPages.JS_LOGIC_OPERATORS}
					element={<JSLogicOperatorsPage />}
				/>
				<Route
					path={AppPages.JS_LOGIC_OPERATORS_TASKS}
					element={<JSLogicOperatorsTasksPage />}
				/>
				<Route
					path={AppPages.JS_PROTOTYPE}
					element={<JSPrototypePage />}
				/>
				<Route
					path={AppPages.JS_DATA_TYPES}
					element={<JSDataTypesPage />}
				/>
				<Route
					path={AppPages.JS_HOW_BROWSER_WORK}
					element={<JSHowBrowserWorkPage />}
				/>
				<Route path={AppPages.JS_THIS} element={<JSThisPage />} />
				<Route
					path={AppPages.JS_THIS_TASKS}
					element={<JSThisTasksPage />}
				/>
				{/*CSS*/}
				<Route path={AppPages.CSS} element={<CSSPage />} />
				<Route path={AppPages.CSS_CURSOR} element={<CSSCursorPage />} />
				<Route
					path={AppPages.CSS_TRUNCATED_TEXT}
					element={<CSSTruncateTextPage />}
				/>
			</Routes>
		</DefaultLayout>
	)
}
