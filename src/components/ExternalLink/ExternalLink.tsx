import React from 'react'

interface ExternalLinkProps {
	href: string
	text: string
	target?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
	href,
	text,
	target = '_blank',
}) => {
	return (
		<a
			className="inline-flex gap-2 underline duration-300 ease-in-out hover:text-yellow-500"
			href={href}
			target={target}
		>
			{text}
			<svg
				width={14}
				height={14}
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
			>
				<path
					fill="#494c4e"
					d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"
				></path>
				<path
					fill="#494c4e"
					d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"
				></path>
			</svg>
		</a>
	)
}

export default ExternalLink
