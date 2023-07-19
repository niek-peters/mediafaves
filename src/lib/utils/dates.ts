function getYear(date: string) {
	return new Date(date).getFullYear();
}

function getMonth(date: string) {
	const month = new Date(date).getMonth() + 1;
	if (month < 10) return `0${month}`;

	return month.toString();
}

function getDay(date: string) {
	return new Date(date).getDate();
}

export const dates = {
	getYear,
	getMonth,
	getDay
};
