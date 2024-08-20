
export default function Acl() {
	return (
		<main className="flex flex-col min-h-screen p-24">
			<h1 className="pb-24 pt-10 text-3xl text-center">ACL task description. lorem ipsum.</h1>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="ACL expression here."
					className="border-2 border-slate-400 shadow-xl w-[60%] max-w-[400px] p-1"
				/>
			</div>
		</main>
	);
}