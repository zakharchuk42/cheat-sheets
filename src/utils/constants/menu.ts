import { AppPages } from './app-pages.ts'

export interface ILinks {
	to: string
	title: string
	skip?: boolean
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
			to: AppPages.JS_EVENTS,
			title: 'Events',
		},
		{
			to: AppPages.JS_LOCAL_STORAGE,
			title: 'Local Storage',
		},
		{
			to: AppPages.JS_PROTOTYPE,
			title: 'prototype, __proto__',
		},
		{
			to: AppPages.JS_VARIABLES,
			title: 'Змінні: var, let, const',
		},
		{
			to: AppPages.JS_THIS,
			title: 'this',
			subLinks: [
				{
					to: AppPages.JS_THIS_TASKS,
					title: 'Задачі',
				},
			],
		},
		{
			to: AppPages.JS_ARRAY_METHODS,
			title: 'Методи масиву',
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
			to: AppPages.JS_OBJECT,
			title: 'Обʼєкти',
			subLinks: [
				{
					to: AppPages.JS_OBJECT_METHODS,
					title: 'Методи',
				},
			],
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
			to: AppPages.JS_DATA_TYPES,
			title: 'Типи даних',
		},
		{
			to: AppPages.JS_HOW_BROWSER_WORK,
			title: 'Як працює браузер',
		},
	],
}
