
type ComponentParameters = {
	progress: number
}

export default function ModeProgressBar({ progress }: ComponentParameters) {
	return (

		<div className="flex justify-center w-full">
			<div className="h-4 w-32 min-w-[250px] border rounded-xl">
				<div
					className={`bg-green-400 h-full rounded-xl`}
					style={{
						"width": `${progress}%`
					}}
				/>
			</div>
		</div>
	);
}