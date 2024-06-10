import { AppPages } from './app-pages.ts'

interface ILinks {
	to: string
	title: string
}

type MenuType = Record<string, ILinks[]>

export const menu: MenuType = {
	js: [
		{
			to: AppPages.JS_EVENT_LOOP,
			title: 'Event Loop',
		},
	],
}
