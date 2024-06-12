interface IPathSvg{
	d: string,
	type: string
}
interface IStateSvgProps {
	stateId: string,
	viewBox: string,
	paths: Array<IPathSvg>,
}

interface IStateProps {
	color: string
	textShadow: string
	textStrokeColor: string
	textStrokeWidth: string
	filter: string,
	svg?: IStateSvgProps,
	width: number,
	height: number,
}
export const StateSvg = (
	props: IStateProps
) => {

	const {
		color,
		textShadow,
		textStrokeWidth,
		textStrokeColor,
		filter,
		svg,
		width,
		height
	} = props;

	return (
		<svg
			style={{
				fill: `${color}`,
				textShadow: `${textShadow}`,
				filter: `${filter}`
			}}
			stroke-width={
				`${textStrokeWidth}`
			}
			stroke={
				`${textStrokeColor}`
			}
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px" 
			y="0px"
			viewBox={`${svg?.viewBox}`}
			width={width}
			height={height}

		>
			{
				svg?.paths.map((svg, index) => {
					if(svg.type === "polygon") {
						return(
							<polygon key={index} points={`${svg.d}`} />
						)		
					}
					if(svg.type === "path") {
						return(
							<path key={index} d={`${svg.d}`} />
						)		
					}
					
				})
			}
		</svg>

	)
}