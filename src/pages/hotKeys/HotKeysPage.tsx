import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import { useEffect } from 'react'
import { HOT_KEYS } from './constants.ts'

import s from './hotKeys.module.scss'
import AccentBlock from '../../components/AccentBlock'

const HotKeysPage = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Hot Keys для WS')
	}, [setTitle])

	return (
		<>
			{HOT_KEYS.map((item) => {
				const title = item.title
				return (
					<div key={title}>
						<div className={s.wrapper}>
							{item.buttons.map((btn) => (
								<div className={s.btn}>{btn}</div>
							))}
						</div>
						- {title}
					</div>
				)
			})}
			<br />

			<AccentBlock>
				⌘ Command (or Cmd) <br /> ⌥ Option (or Alt) <br /> ⌃ Control (or
				Ctrl)
			</AccentBlock>
		</>
	)
}

export default HotKeysPage
