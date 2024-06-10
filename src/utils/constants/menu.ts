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
			title: 'Область видимості змінних, замикання',
		},
	],
}
