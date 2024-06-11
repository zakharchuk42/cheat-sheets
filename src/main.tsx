import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TitleProvider } from './utils/helpers/TitleContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TitleProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</TitleProvider>
	</React.StrictMode>
)
