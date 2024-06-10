import DefaultLayout from '../../layouts/DefaultLayout.tsx'
import React from 'react'
import Main from '../../Modules/Main'

const MainPage: React.FC = () => {
	return (
		<DefaultLayout title="Main Menu" withHeader={false}>
			<Main />
		</DefaultLayout>
	)
}

export default MainPage
