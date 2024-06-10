import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout.tsx'
import JSEventLoop from '../../Modules/JSEventLoop'

const JSEventLoopPage: React.FC = () => {
	return (
		<DefaultLayout title="Event Loop">
			<JSEventLoop />
		</DefaultLayout>
	)
}

export default JSEventLoopPage
