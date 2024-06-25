import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'
import ExternalLink from '../../../components/ExternalLink'
import AccentBlock from '../../../components/AccentBlock'

interface JsDataTypesPageProps {}

const JSDataTypesPage: React.FC<JsDataTypesPageProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Типи даних')
	}, [setTitle])

	return (
		<>
			<p>
				В JS <strong>не існує</strong> примітивних даних. Існує тільки{' '}
				<strong>primitive value</strong>.
			</p>
			<AccentBlock>
				<ExternalLink
					href="https://tc39.es/ecma262/#sec-primitive-value"
					text="ECMAScript - Terms and Definitions"
				/>
			</AccentBlock>
			<p></p>
			<ul>
				<li>
					- numeric
					<ul>
						<li>-- bigint</li>
						<li>-- number</li>
					</ul>
				</li>
				<li>- null</li>
				<li>- undefined</li>
				<li>- boolean</li>
				<li>- object</li>
				<li>- string</li>
				<li>- symbol</li>
			</ul>
			<p></p>
			<AccentBlock>
				<ExternalLink
					href="https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values"
					text="ECMAScript Data Types and Values"
				/>
			</AccentBlock>
		</>
	)
}

export default JSDataTypesPage
