import { AppPages } from './app-pages.ts'

export interface ILinks {
	to: string
	title: string
	subLinks?: {
		to: string
		title: string
	}[]
}

type MenuType = Record<string, ILinks[]>

export const menu: MenuType = {
	js: [
		{
			to: AppPages.JS_EVENT_LOOP,
			title: 'Event Loop',
			subLinks: [
				{
					to: AppPages.JS_EVENT_LOOP_USEFUL,
					title: 'Рекомендації',
				},
				{
					to: AppPages.JS_EVENT_LOOP_EXAMPLES,
					title: 'Приклади',
				},
				{
					to: AppPages.JS_EVENT_LOOP_TASKS,
					title: 'Задачі',
				},
			],
		},
		{
			to: AppPages.JS_ENVIRONMENT,
			title: 'Область видимості, замикання',
			subLinks: [
				{
					to: AppPages.JS_ENVIRONMENT_EXAMPLES,
					title: 'Приклади',
				},
				{
					to: AppPages.JS_ENVIRONMENT_TASKS,
					title: 'Задачі',
				},
			],
		},
		{
			to: AppPages.JS_ARRAY_METHODS,
			title: 'Методи масиву',
		},
		{
			to: AppPages.JS_EVENTS,
			title: 'Events',
		},
		{
			to: AppPages.JS_LOCAL_STORAGE,
			title: 'Local Storage',
		},
		{
			to: AppPages.JS_OBJECT,
			title: 'Обʼєкти',
		},
		{
			to: AppPages.JS_LOGIC_OPERATORS,
			title: 'Логічні оператори',
			subLinks: [
				{
					to: AppPages.JS_LOGIC_OPERATORS_TASKS,
					title: 'Задачі',
				},
			],
		},
		{
			to: '',
			title: 'prototype, __proto__',
		},
	],
}
