import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout.tsx'
import JSEventLoopExamples from '../../Modules/JSEventLoop/components/JSEventLoopExamples'

const JSEventLoopExamplesPage: React.FC = () => {
	return (
		<DefaultLayout title="Event Loop | Приклади">
			<JSEventLoopExamples />
		</DefaultLayout>
	)
}

export default JSEventLoopExamplesPage
