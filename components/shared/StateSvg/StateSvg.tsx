interface IPathSvg{
	d: string
}
interface IStateSvGProps {
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
	svg?: IStateSvGProps,
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
		svg
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
		>
			{
				svg?.paths.map((svg, index) => {
					return(
						<path key={index} d={`${svg.d}`} />
					)
				})
			}
		</svg>

	)
}