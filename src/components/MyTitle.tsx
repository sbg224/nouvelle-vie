interface  Typage {
	title: string;
}


function MyTitle({title}: Typage) {
	return <h1>{title}</h1>;
}

export default MyTitle;
