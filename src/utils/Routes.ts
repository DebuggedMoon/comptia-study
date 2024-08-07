
export type Route = {
	label: string,
	path: string
};

/* 
	Dictionary containing routes and their labels.
	Labels are the name of a given path.
*/
export const ROUTES: Route[] = [
	{
		label: "Home",
		path: "/"
	},
	{
		label: "Practice",
		path: "/practice"
	},
	{
		label: "Questions",
		path: "/questions"
	},
	{
		label: "Add Question",
		path: "/questions/add-question"
	}
];