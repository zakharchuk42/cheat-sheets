import React from 'react'
import git from '../../app/assets/git.svg'
import li from '../../app/assets/li.svg'
import js from '../../app/assets/js.svg'
import ecma from '../../app/assets/ecma.png'

const SocialsBlock: React.FC = () => {
	return (
		<div className="flex items-center justify-center gap-4 p-4">
			<a href="https://github.com/zakharchuk42" target="_blank">
				<img className="w-8" src={git} alt="GitHub" />
			</a>
			<a
				href="https://www.linkedin.com/in/vit-zakharchuk/"
				target="_blank"
			>
				<img className="w-8" src={li} alt="Linkedin" />
			</a>
			|
			<a href="https://uk.javascript.info/" target="_blank">
				<img className="w-8" src={js} alt="Telegram" />
			</a>
			<a
				href="https://ecma-international.org/publications-and-standards/standards/?order=last-change"
				target="_blank"
			>
				<img className="w-8" src={ecma} alt="Telegram" />
			</a>
		</div>
	)
}

export default SocialsBlock
